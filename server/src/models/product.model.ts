import { Product, Category } from '../../prisma/generated/client';
import prisma from '../database/prisma';

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
        throw new Error('Category not found');
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
      if (error instanceof Error) {
        throw new Error(`Failed to create product: ${error.message}`);
      }
      throw new Error('Failed to create product: Unknown error');
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
        throw new Error(`Failed to fetch products: ${error.message}`);
      }
      throw new Error('Failed to fetch products: Unknown error');
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
        throw new Error(`Failed to fetch product: ${error.message}`);
      }
      throw new Error('Failed to fetch product: Unknown error');
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
        throw new Error(
          `Failed to fetch products by category: ${error.message}`
        );
      }
      throw new Error('Failed to fetch products by category: Unknown error');
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
          throw new Error('Category not found');
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

      const product = await prisma.product.update({
        where: { id },
        data: updateData,
        include: {
          category: true,
        },
      });

      return product;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to update product: ${error.message}`);
      }
      throw new Error('Failed to update product: Unknown error');
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
        throw new Error('Product not found');
      }

      await prisma.product.delete({
        where: { id },
      });

      return existingProduct;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to delete product: ${error.message}`);
      }
      throw new Error('Failed to delete product: Unknown error');
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
