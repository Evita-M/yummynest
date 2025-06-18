import { z } from 'zod';
import { validate } from './validate';

export const categoryCreateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(60, 'Name cannot exceed 60 characters')
      .trim(),
  }),
});

export const categoryUpdateSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(60, 'Name cannot exceed 60 characters')
      .trim()
      .optional(),
  }),
  params: z.object({
    id: z.string().uuid('Invalid category ID format'),
  }),
});

export const categoryParamsSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid category ID format'),
  }),
});

export const categoryNameParamsSchema = z.object({
  params: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(60, 'Name cannot exceed 60 characters'),
  }),
});

export const validateCategoryCreate = validate(categoryCreateSchema);
export const validateCategoryUpdate = validate(categoryUpdateSchema);
export const validateCategoryParams = validate(categoryParamsSchema);
export const validateCategoryNameParams = validate(categoryNameParamsSchema);
