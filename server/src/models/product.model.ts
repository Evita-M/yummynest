import { Product, Category } from '../../prisma/generated/client';
import prisma from '../database/prisma';
import { CustomError } from '../middlewares/error-handler';
import { ERROR_CODES, ERROR_MESSAGES } from '../utils/error-constants';

export interface CreateProductInput {
  name: string;
  description?: string;
  price: number;
  offerPrice?: number;
  imageSrc?: string;
  inStock?: boolean;
  categoryId: string;
  reviewTotalCount?: number;
  reviewRating?: number;
}

export interface UpdateProductInput {
  name?: string;
  description?: string;
  price?: number;
  offerPrice?: number;
  imageSrc?: string;
  inStock?: boolean;
  categoryId?: string;
  reviewTotalCount?: number;
  reviewRating?: number;
}

export type ProductWithRelations = Product & {
  category?: Category;
};

export class ProductModel {
  static async create(data: CreateProductInput): Promise<ProductWithRelations> {
    try {
      const categoryExists = await prisma.category.findUnique({
        where: { id: data.categoryId },
        select: { id: true },
      });

      if (!categoryExists) {
        throw new CustomError(
          ERROR_MESSAGES.RECORD_NOT_FOUND('Category'),
          404,
          ERROR_CODES.NOT_FOUND
        );
      }

      const product = await prisma.product.create({
        data: {
          name: data.name.trim(),
          description: data.description?.trim(),
          price: data.price,
          offerPrice: data.offerPrice,
          imageSrc: data.imageSrc?.trim(),
          inStock: data.inStock ?? true,
          categoryId: data.categoryId,
          reviewTotalCount: data.reviewTotalCount ?? 0,
          reviewRating: data.reviewRating ?? 0,
        },
        include: {
          category: true,
        },
      });

      return product;
    } catch (error) {
      // Re-throw CustomErrors as-is
      if (error instanceof CustomError) {
        throw error;
      }

      if (error instanceof Error) {
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_CREATE('Product'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_CREATE('Product'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }

  static async findMany(): Promise<ProductWithRelations[]> {
    try {
      const products = await prisma.product.findMany({
        include: {
          category: true,
        },
        orderBy: [{ inStock: 'desc' }, { name: 'asc' }],
      });

      return products;
    } catch (error) {
      if (error instanceof Error) {
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_FETCH('Products'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_FETCH('Products'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }

  static async findById(
    id: string,
    includeCategory = true
  ): Promise<ProductWithRelations | null> {
    try {
      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          category: includeCategory,
        },
      });

      if (!product) return null;

      return product;
    } catch (error) {
      if (error instanceof Error) {
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_FETCH('Product'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_FETCH('Product'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }

  static async findByCategory(
    categoryId: string,
    includeReviews = false
  ): Promise<ProductWithRelations[]> {
    try {
      const products = await prisma.product.findMany({
        where: { categoryId },
        include: {
          category: true,
        },
        orderBy: [{ inStock: 'desc' }, { name: 'asc' }],
      });

      return products;
    } catch (error) {
      if (error instanceof Error) {
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_FETCH('Products by category'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_FETCH('Products by category'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }

  static async updateById(
    id: string,
    data: UpdateProductInput
  ): Promise<ProductWithRelations> {
    try {
      if (data.categoryId) {
        const categoryExists = await prisma.category.findUnique({
          where: { id: data.categoryId },
          select: { id: true },
        });

        if (!categoryExists) {
          throw new CustomError(
            ERROR_MESSAGES.RECORD_NOT_FOUND('Category'),
            404,
            ERROR_CODES.NOT_FOUND
          );
        }
      }

      const updateData: any = {};

      if (data.name !== undefined) updateData.name = data.name.trim();
      if (data.description !== undefined)
        updateData.description = data.description?.trim();
      if (data.price !== undefined) updateData.price = data.price;
      if (data.offerPrice !== undefined)
        updateData.offerPrice = data.offerPrice;
      if (data.imageSrc !== undefined)
        updateData.imageSrc = data.imageSrc?.trim();
      if (data.inStock !== undefined) updateData.inStock = data.inStock;
      if (data.categoryId !== undefined)
        updateData.categoryId = data.categoryId;
      if (data.reviewTotalCount !== undefined)
        updateData.reviewTotalCount = data.reviewTotalCount;
      if (data.reviewRating !== undefined)
        updateData.reviewRating = data.reviewRating;
      if (data.imageSrc === undefined) updateData.imageSrc = null;

      const product = await prisma.product.update({
        where: { id },
        data: updateData,
        include: {
          category: true,
        },
      });

      return product;
    } catch (error) {
      // Re-throw CustomErrors as-is
      if (error instanceof CustomError) {
        throw error;
      }

      if (error instanceof Error) {
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_UPDATE('Product'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_UPDATE('Product'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }

  static async deleteById(id: string): Promise<ProductWithRelations> {
    try {
      const existingProduct = await prisma.product.findUnique({
        where: { id },
        include: {
          category: true,
        },
      });

      if (!existingProduct) {
        throw new CustomError(
          ERROR_MESSAGES.RECORD_NOT_FOUND('Product'),
          404,
          ERROR_CODES.NOT_FOUND
        );
      }

      await prisma.product.delete({
        where: { id },
      });

      return existingProduct;
    } catch (error) {
      // Re-throw CustomErrors as-is
      if (error instanceof CustomError) {
        throw error;
      }

      if (error instanceof Error) {
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_DELETE('Product'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_DELETE('Product'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }
}

export const createProduct = (data: CreateProductInput) =>
  ProductModel.create(data);
export const getAllProducts = () => ProductModel.findMany();
export const getProduct = (id: string) => ProductModel.findById(id);
export const updateProduct = (id: string, data: UpdateProductInput) =>
  ProductModel.updateById(id, data);
export const deleteProduct = (id: string) => ProductModel.deleteById(id);
export const readProductsByCategory = (categoryId: string) =>
  ProductModel.findByCategory(categoryId);

export default ProductModel;
