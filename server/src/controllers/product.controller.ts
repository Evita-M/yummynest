import { Request, Response } from 'express';
import { Prisma } from '../../prisma/generated/client';
import ProductModel, {
  CreateProductInput,
  UpdateProductInput,
} from '../models/product.model';
import { validateString } from '../utils/validate-string/indes';
import { validateNumber } from '../utils/validate-number';
import { validateUUID } from '../utils/validate-uuid';

// Error response helper
const handleError = (res: Response, error: unknown, operation: string) => {
  console.error(`${operation} error:`, error);

  if (error instanceof Error) {
    // Handle Prisma-specific errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(409).json({
            error: 'Product with this name already exists',
            code: 'DUPLICATE_NAME',
          });
        case 'P2025':
          return res.status(404).json({
            error: 'Product not found',
            code: 'NOT_FOUND',
          });
        case 'P2003':
          return res.status(400).json({
            error: 'Invalid category reference',
            code: 'INVALID_REFERENCE',
          });
        default:
          return res.status(400).json({
            error: 'Database operation failed',
            code: 'DB_ERROR',
          });
      }
    }

    // Handle validation errors
    if (
      error.message.includes('required') ||
      error.message.includes('invalid') ||
      error.message.includes('exceed') ||
      error.message.includes('positive') ||
      error.message.includes('less than')
    ) {
      return res.status(400).json({
        error: error.message,
        code: 'VALIDATION_ERROR',
      });
    }

    // Handle business logic errors
    if (error.message.includes('Category not found')) {
      return res.status(400).json({
        error: error.message,
        code: 'CATEGORY_NOT_FOUND',
      });
    }

    return res.status(500).json({
      error: error.message,
      code: 'INTERNAL_ERROR',
    });
  }

  return res.status(500).json({
    error: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
  });
};

/**
 * Create a new product
 * POST /api/products
 */
export async function httpCreateProduct(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const {
      name,
      description,
      price,
      offerPrice,
      imageSrc,
      inStock,
      categoryId,
      reviewTotalCount,
      reviewRating,
    } = req.body;

    // Validate required fields
    const validatedName = validateString('Name', name, 1, 120);
    const validatedPrice = validateNumber('Price', price, 1, 200);

    if (!categoryId) {
      return res.status(400).json({
        error: 'Category ID is required',
        code: 'VALIDATION_ERROR',
      });
    }

    const productData: CreateProductInput = {
      name: validatedName,
      description: description?.trim(),
      price: validatedPrice,
      categoryId: categoryId.trim(),
      inStock: inStock ?? true,
      reviewTotalCount: reviewTotalCount ?? 0,
      reviewRating: reviewRating ?? 0,
      imageSrc: imageSrc?.trim(),
    };

    // Validate offer price if provided
    if (offerPrice !== undefined) {
      productData.offerPrice = validateNumber(
        'Offer price',
        offerPrice,
        0,
        validatedPrice
      );
    }

    const newProduct = await ProductModel.create(productData);

    return res.status(201).json({
      data: newProduct,
      message: 'Product created successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Create product');
  }
}

/**
 * Get all products with optional filtering
 * GET /api/products?categoryId=uuid&categoryName=name&search=query&inStock=true&priceMin=10&priceMax=100&includeCategory=true&includeReviews=false
 */
export async function httpGetAllProducts(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const {
      categoryId,
      categoryName,
      search,
      inStock,
      priceMin,
      priceMax,
      includeCategory,
      includeReviews,
    } = req.query;

    // Since filtering was removed, just get all products
    const products = await ProductModel.findMany();

    return res.status(200).json({
      data: products,
      count: products.length,
      message: 'Products retrieved successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Get products');
  }
}

/**
 * Get product by ID
 * GET /api/products/:id?includeCategory=true&includeReviews=true
 */
export async function httpGetProduct(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const productId = validateUUID(req.params.id);
    const includeCategory = req.query.includeCategory !== 'false';

    const product = await ProductModel.findById(productId, includeCategory);

    if (!product) {
      return res.status(404).json({
        error: 'Product not found',
        code: 'NOT_FOUND',
      });
    }

    return res.status(200).json({
      data: product,
      message: 'Product retrieved successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Get product by ID');
  }
}

/**
 * Get products by category ID
 * GET /api/products/category/:categoryId?includeReviews=false
 */
export async function httpGetProductsByCategory(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const categoryId = validateUUID(req.params.categoryId);
    const includeReviews = req.query.includeReviews === 'true';

    const products = await ProductModel.findByCategory(
      categoryId,
      includeReviews
    );

    return res.status(200).json({
      data: products,
      count: products.length,
      message: 'Products retrieved successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Get products by category');
  }
}

/**
 * Update product by ID
 * PUT /api/products/:id
 */
export async function httpUpdateProduct(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const productId = validateUUID(req.params.id);
    const updateData: UpdateProductInput = {};

    // Validate and set fields if provided
    if (req.body.name !== undefined) {
      updateData.name = validateString('Name', req.body.name, 1, 120);
    }

    if (req.body.description !== undefined) {
      updateData.description = req.body.description?.trim();
    }

    if (req.body.price !== undefined) {
      updateData.price = validateNumber('Price', req.body.price, 1, 200);
    }

    if (req.body.reviewTotalCount !== undefined) {
      updateData.reviewTotalCount = req.body.reviewTotalCount;
    }
    if (req.body.reviewRating !== undefined) {
      updateData.reviewRating = req.body.reviewRating;
    }

    if (req.body.offerPrice !== undefined) {
      const originalPrice = updateData.price || req.body.price;
      if (!originalPrice) {
        return res.status(400).json({
          error: 'Cannot set offer price without knowing the original price',
          code: 'VALIDATION_ERROR',
        });
      }
      updateData.offerPrice = validateNumber(
        'Offer price',
        req.body.offerPrice,
        0,
        originalPrice
      );
    }

    if (req.body.imageSrc !== undefined) {
      updateData.imageSrc = req.body.imageSrc?.trim();
    }

    if (req.body.inStock !== undefined) {
      updateData.inStock = Boolean(req.body.inStock);
    }

    if (req.body.categoryId !== undefined) {
      updateData.categoryId = req.body.categoryId.trim();
    }

    const updatedProduct = await ProductModel.updateById(productId, updateData);

    return res.status(200).json({
      data: updatedProduct,
      message: 'Product updated successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Update product');
  }
}

/**
 * Delete product by ID
 * DELETE /api/products/:id
 */
export async function httpDeleteProduct(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const productId = validateUUID(req.params.id);

    const deletedProduct = await ProductModel.deleteById(productId);

    return res.status(200).json({
      data: deletedProduct,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Delete product');
  }
}
