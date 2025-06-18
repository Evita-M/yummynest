import { Request, Response } from 'express';
import { Prisma } from '../../prisma/generated/client';
import CategoryModel, {
  CreateCategoryInput,
  UpdateCategoryInput,
} from '../models/category.model';
import { validateString } from '../utils/validate-string/indes';
import { validateUUID } from '../utils/validate-uuid';

const handleError = (res: Response, error: unknown, operation: string) => {
  console.error(`${operation} error:`, error);

  if (error instanceof Error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          return res.status(409).json({
            error: 'Category with this name already exists',
            code: 'DUPLICATE_NAME',
          });
        case 'P2025':
          return res.status(404).json({
            error: 'Category not found',
            code: 'NOT_FOUND',
          });
        default:
          return res.status(400).json({
            error: 'Database operation failed',
            code: 'DB_ERROR',
          });
      }
    }
    if (
      error.message.includes('required') ||
      error.message.includes('invalid') ||
      error.message.includes('exceed')
    ) {
      return res.status(400).json({
        error: error.message,
        code: 'VALIDATION_ERROR',
      });
    }

    if (error.message.includes('Cannot delete category')) {
      return res.status(409).json({
        error: error.message,
        code: 'CONFLICT',
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

export async function httpCreateCategory(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const validatedName = validateString('Name', req.body.name, 1, 60);

    const existingCategory =
      await CategoryModel.categoryExistsByName(validatedName);
    if (existingCategory) {
      return res.status(409).json({
        error: 'Category with this name already exists',
        code: 'DUPLICATE_NAME',
      });
    }

    const categoryData: CreateCategoryInput = {
      name: validatedName,
    };

    const newCategory = await CategoryModel.createCategory(categoryData);

    return res.status(201).json({
      data: newCategory,
      message: 'Category created successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Create category');
  }
}

export async function httpGetAllCategories(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const includeProducts = req.query.includeProducts === 'true';
    const search = req.query.search as string;
    const withCount = req.query.withCount === 'true';

    let categories;

    if (withCount) {
      categories = await CategoryModel.getAllCategories();
    } else {
      categories = await CategoryModel.getAllCategories({
        name: search,
        includeProducts,
      });
    }

    return res.status(200).json({
      data: categories,
      count: categories.length,
      message: 'Categories retrieved successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Get categories');
  }
}

export async function httpUpdateCategory(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const categoryId = validateUUID(req.params.id);

    const updateData: UpdateCategoryInput = {};

    if (req.body.name !== undefined) {
      updateData.name = validateString('Name', req.body.name, 1, 60);

      const existingCategory = await CategoryModel.categoryExistsByName(
        updateData.name
      );
      if (existingCategory && existingCategory) {
        return res.status(409).json({
          error: 'Category with this name already exists',
          code: 'DUPLICATE_NAME',
        });
      }
    }

    const updatedCategory = await CategoryModel.updateCategoryById(
      categoryId,
      updateData
    );

    return res.status(200).json({
      data: updatedCategory,
      message: 'Category updated successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Update category');
  }
}

export async function httpDeleteCategory(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const categoryId = validateUUID(req.params.id);

    const deletedCategory = await CategoryModel.deleteCategoryById(categoryId);

    return res.status(200).json({
      data: deletedCategory,
      message: 'Category deleted successfully',
    });
  } catch (error) {
    return handleError(res, error, 'Delete category');
  }
}
