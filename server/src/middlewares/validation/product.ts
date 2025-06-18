import { z } from 'zod';
import { validate } from './validate';

export const productCreateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(120, 'Name cannot exceed 120 characters')
      .trim(),
    description: z.string().optional(),
    price: z.number().min(0, 'Price must be a positive number'),
    offerPrice: z
      .number()
      .min(0, 'Offer price must be a positive number')
      .optional(),
    imageUrl: z.string().url('Invalid image URL format').optional(),
    inStock: z.boolean().optional(),
    categoryId: z.string().uuid('Invalid category ID format'),
  }),
});

export const productUpdateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(120, 'Name cannot exceed 120 characters')
      .trim()
      .optional(),
    description: z.string().optional(),
    price: z.number().min(0, 'Price must be a positive number').optional(),
    offerPrice: z
      .number()
      .min(0, 'Offer price must be a positive number')
      .optional(),
    imageUrl: z.string().url('Invalid image URL format').optional(),
    inStock: z.boolean().optional(),
    categoryId: z.string().uuid('Invalid category ID format').optional(),
  }),
  params: z.object({
    id: z.string().uuid('Invalid product ID format'),
  }),
});

export const productParamsSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid product ID format'),
  }),
});

export const productCategoryParamsSchema = z.object({
  params: z.object({
    categoryId: z.string().uuid('Invalid category ID format'),
  }),
});

export const productSearchSchema = z.object({
  query: z.object({
    q: z.string().min(1, 'Search query is required'),
    includeCategory: z.string().optional(),
    includeReviews: z.string().optional(),
  }),
});

export const validateProductCategoryParams = validate(
  productCategoryParamsSchema
);

export const validateProductCreate = validate(productCreateSchema);
export const validateProductUpdate = validate(productUpdateSchema);
export const validateProductParams = validate(productParamsSchema);
