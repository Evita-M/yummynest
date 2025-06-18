import { Request, Response } from 'express';
import CategoryModel, {
  CreateCategoryInput,
  UpdateCategoryInput,
} from '../models/category.model';
import { asyncHandler } from '../middlewares/error-handler';
import { ERROR_MESSAGES, ERROR_CODES } from '../utils/error-constants';

export const httpCreateCategory = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const existingCategory = await CategoryModel.categoryExistsByName(
      req.body.name
    );
    if (existingCategory) {
      return res.status(409).json({
        error: ERROR_MESSAGES.DUPLICATE_RECORD('Category'),
        code: ERROR_CODES.DUPLICATE_ENTRY,
      });
    }

    const categoryData: CreateCategoryInput = {
      name: req.body.name,
    };

    const newCategory = await CategoryModel.createCategory(categoryData);

    return res.status(201).json({
      data: newCategory,
      message: 'Category created successfully',
    });
  }
);

export const httpGetAllCategories = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
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
  }
);

export const httpUpdateCategory = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const categoryId = req.params.id!;
    const updateData: UpdateCategoryInput = {};

    if (req.body.name !== undefined) {
      updateData.name = req.body.name;

      const existingCategory = await CategoryModel.categoryExistsByName(
        req.body.name
      );
      if (existingCategory) {
        return res.status(409).json({
          error: ERROR_MESSAGES.CATEGORY_EXISTS,
          code: ERROR_CODES.DUPLICATE_ENTRY,
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
  }
);

export const httpDeleteCategory = asyncHandler(
  async (req: Request, res: Response): Promise<Response> => {
    const categoryId = req.params.id!;

    const deletedCategory = await CategoryModel.deleteCategoryById(categoryId);

    return res.status(200).json({
      data: deletedCategory,
      message: 'Category deleted successfully',
    });
  }
);
