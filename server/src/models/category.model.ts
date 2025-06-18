import { Category } from '../../prisma/generated/client';
import prisma from '../database/prisma';
import { CustomError } from '../middlewares/error-handler';
import { ERROR_CODES, ERROR_MESSAGES } from '../utils/error-constants';

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
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_CREATE('Category'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_CREATE('Category'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
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
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_FETCH('Categories'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_FETCH('Categories'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
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
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_UPDATE('Category'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_UPDATE('Category'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }

  static async deleteCategoryById(id: string): Promise<Category> {
    try {
      const categoryWithProducts = await prisma.category.findUnique({
        where: { id },
        include: { _count: { select: { products: true } } },
      });

      if (!categoryWithProducts) {
        throw new CustomError(
          ERROR_MESSAGES.RECORD_NOT_FOUND('Category'),
          404,
          ERROR_CODES.NOT_FOUND
        );
      }

      if (categoryWithProducts._count.products > 0) {
        throw new CustomError(
          ERROR_MESSAGES.CANNOT_DELETE_WITH_RELATIONS('Category', 'products'),
          409,
          ERROR_CODES.CONFLICT
        );
      }

      return await prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      // Re-throw CustomErrors as-is
      if (error instanceof CustomError) {
        throw error;
      }

      if (error instanceof Error) {
        throw new CustomError(
          ERROR_MESSAGES.FAILED_TO_DELETE('Category'),
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        ERROR_MESSAGES.FAILED_TO_DELETE('Category'),
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
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
        throw new CustomError(
          'Failed to check category existence',
          500,
          ERROR_CODES.INTERNAL_ERROR,
          true,
          { originalError: error.message }
        );
      }
      throw new CustomError(
        'Failed to check category existence',
        500,
        ERROR_CODES.UNKNOWN_ERROR
      );
    }
  }
}

export default CategoryModel;
