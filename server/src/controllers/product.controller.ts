import { Request, Response } from 'express';
import ProductModel, {
  CreateProductInput,
  UpdateProductInput,
} from '../models/product.model';
import { asyncHandler, CustomError } from '../middlewares/error-handler';
import { ERROR_MESSAGES, ERROR_CODES } from '../utils/error-constants';

export const httpCreateProduct = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
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

    // Use custom error for validation
    if (!categoryId) {
      throw new CustomError(
        ERROR_MESSAGES.CATEGORY_ID_REQUIRED,
        400,
        ERROR_CODES.VALIDATION_ERROR
      );
    }

    // Additional validation
    if (!name || name.trim().length === 0) {
      throw new CustomError(
        ERROR_MESSAGES.PRODUCT_NAME_REQUIRED,
        400,
        ERROR_CODES.VALIDATION_ERROR
      );
    }

    if (price <= 0) {
      throw new CustomError(
        ERROR_MESSAGES.INVALID_PRICE,
        400,
        ERROR_CODES.VALIDATION_ERROR
      );
    }

    if (offerPrice && offerPrice >= price) {
      throw new CustomError(
        ERROR_MESSAGES.INVALID_OFFER_PRICE,
        400,
        ERROR_CODES.VALIDATION_ERROR
      );
    }

    const productData: CreateProductInput = {
      name: name.trim(),
      description: description?.trim(),
      price: price,
      categoryId: categoryId.trim(),
      inStock: inStock ?? true,
      offerPrice: offerPrice,
      reviewTotalCount: reviewTotalCount ?? 0,
      reviewRating: reviewRating ?? 0,
      imageSrc: imageSrc?.trim(),
    };

    const newProduct = await ProductModel.create(productData);

    return res.status(201).json({
      data: newProduct,
      message: 'Product created successfully',
    });
  }
);

export const httpGetAllProducts = asyncHandler(
  async (_req: Request, res: Response): Promise<Response> => {
    const products = await ProductModel.findMany();

    return res.status(200).json({
      data: products,
      count: products.length,
      message: 'Products retrieved successfully',
    });
  }
);

export const httpGetProduct = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const productId = req.params.id;
    const includeCategory = req.query.includeCategory !== 'false';

    if (!productId) {
      return res.status(400).json({
        error: ERROR_MESSAGES.REQUIRED_FIELD('Product ID'),
        code: ERROR_CODES.VALIDATION_ERROR,
      });
    }

    const product = await ProductModel.findById(productId, includeCategory);

    if (!product) {
      return res.status(404).json({
        error: ERROR_MESSAGES.RECORD_NOT_FOUND('Product'),
        code: ERROR_CODES.NOT_FOUND,
      });
    }

    return res.status(200).json({
      data: product,
      message: 'Product retrieved successfully',
    });
  }
);

export const httpGetProductsByCategory = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const categoryId = req.params.categoryId;
    const includeReviews = req.query.includeReviews === 'true';

    if (!categoryId) {
      return res.status(400).json({
        error: ERROR_MESSAGES.CATEGORY_ID_REQUIRED,
        code: ERROR_CODES.VALIDATION_ERROR,
      });
    }

    const products = await ProductModel.findByCategory(
      categoryId,
      includeReviews
    );

    return res.status(200).json({
      data: products,
      count: products.length,
      message: 'Products retrieved successfully',
    });
  }
);

export const httpUpdateProduct = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const productId = req.params.id;
    const updateData: UpdateProductInput = {};

    if (!productId) {
      return res.status(400).json({
        error: ERROR_MESSAGES.REQUIRED_FIELD('Product ID'),
        code: ERROR_CODES.VALIDATION_ERROR,
      });
    }

    if (req.body.name !== undefined) {
      updateData.name = req.body.name;
    }

    if (req.body.description !== undefined) {
      updateData.description = req.body.description?.trim();
    }

    if (req.body.price !== undefined) {
      updateData.price = req.body.price;
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
          error: ERROR_MESSAGES.INVALID_OFFER_PRICE,
          code: ERROR_CODES.VALIDATION_ERROR,
        });
      }
      updateData.offerPrice = req.body.offerPrice;
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
  }
);

export const httpDeleteProduct = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({
        error: ERROR_MESSAGES.REQUIRED_FIELD('Product ID'),
        code: ERROR_CODES.VALIDATION_ERROR,
      });
    }

    const deletedProduct = await ProductModel.deleteById(productId);

    return res.status(200).json({
      data: deletedProduct,
      message: 'Product deleted successfully',
    });
  }
);
