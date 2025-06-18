import { Category } from '../../prisma/generated/client';
import prisma from '../database/prisma';

export interface CreateCategoryInput {
  name: string;
}

export interface UpdateCategoryInput {
  name?: string;
}

export interface CategoryFilters {
  name?: string;
  includeProducts?: boolean;
}

export class CategoryModel {
  static async createCategory(data: CreateCategoryInput): Promise<Category> {
    try {
      return await prisma.category.create({
        data: {
          name: data.name.trim(),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to create category: ${error.message}`);
      }
      throw new Error('Failed to create category: Unknown error');
    }
  }

  static async getAllCategories(
    filters: CategoryFilters = {}
  ): Promise<Category[]> {
    try {
      const { includeProducts = false, name } = filters;

      return await prisma.category.findMany({
        where: name
          ? { name: { contains: name, mode: 'insensitive' } }
          : undefined,
        include: {
          products: includeProducts,
        },
        orderBy: {
          name: 'asc',
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch categories: ${error.message}`);
      }
      throw new Error('Failed to fetch categories: Unknown error');
    }
  }

  static async updateCategoryById(
    id: string,
    data: UpdateCategoryInput
  ): Promise<Category> {
    try {
      return await prisma.category.update({
        where: { id },
        data: {
          ...(data.name && { name: data.name.trim() }),
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to update category: ${error.message}`);
      }
      throw new Error('Failed to update category: Unknown error');
    }
  }

  static async deleteCategoryById(id: string): Promise<Category> {
    try {
      const categoryWithProducts = await prisma.category.findUnique({
        where: { id },
        include: { _count: { select: { products: true } } },
      });

      if (!categoryWithProducts) {
        throw new Error('Category not found');
      }

      if (categoryWithProducts._count.products > 0) {
        throw new Error('Cannot delete category with existing products');
      }

      return await prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to delete category: ${error.message}`);
      }
      throw new Error('Failed to delete category: Unknown error');
    }
  }

  static async categoryExistsByName(name: string): Promise<boolean> {
    try {
      const category = await prisma.category.findUnique({
        where: { name: name.trim() },
        select: { id: true },
      });
      return !!category;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to check category existence: ${error.message}`);
      }
      throw new Error('Failed to check category existence: Unknown error');
    }
  }
}

export default CategoryModel;
