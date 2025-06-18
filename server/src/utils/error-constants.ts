export const ERROR_CODES = {
  // Validation errors
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  REQUIRED_FIELD: 'REQUIRED_FIELD',
  INVALID_FORMAT: 'INVALID_FORMAT',
  INVALID_VALUE: 'INVALID_VALUE',

  // Database errors
  DB_ERROR: 'DB_ERROR',
  DB_CONNECTION_ERROR: 'DB_CONNECTION_ERROR',
  DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',
  NOT_FOUND: 'NOT_FOUND',
  FOREIGN_KEY_ERROR: 'FOREIGN_KEY_ERROR',
  RELATION_VIOLATION: 'RELATION_VIOLATION',

  // Business logic errors
  CONFLICT: 'CONFLICT',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  TOO_MANY_REQUESTS: 'TOO_MANY_REQUESTS',

  // System errors
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

export const ERROR_MESSAGES = {
  // Generic messages
  SOMETHING_WENT_WRONG: 'Something went wrong!',
  UNEXPECTED_ERROR: 'An unexpected error occurred',

  // Validation messages
  REQUIRED_FIELD: (field: string) => `${field} is required`,
  INVALID_FORMAT: (field: string) => `${field} has invalid format`,
  MUST_BE_POSITIVE: (field: string) => `${field} must be greater than 0`,
  MUST_BE_UNIQUE: (field: string) => `${field} must be unique`,

  // Database messages
  RECORD_NOT_FOUND: (entity: string) => `${entity} not found`,
  DUPLICATE_RECORD: (entity: string) =>
    `${entity} with this data already exists`,
  FOREIGN_KEY_VIOLATION: 'Referenced record does not exist',
  RELATION_CONSTRAINT: 'Operation would violate data relationships',

  // Generic operation messages
  FAILED_TO_CREATE: (entity: string) =>
    `Failed to create ${entity.toLowerCase()}`,
  FAILED_TO_UPDATE: (entity: string) =>
    `Failed to update ${entity.toLowerCase()}`,
  FAILED_TO_DELETE: (entity: string) =>
    `Failed to delete ${entity.toLowerCase()}`,
  FAILED_TO_FETCH: (entity: string) =>
    `Failed to fetch ${entity.toLowerCase()}`,

  // Business rule messages
  CANNOT_DELETE_WITH_RELATIONS: (entity: string, relation: string) =>
    `Cannot delete ${entity.toLowerCase()} with existing ${relation}`,

  // Product specific
  PRODUCT_NAME_REQUIRED: 'Product name is required',
  INVALID_PRICE: 'Price must be greater than 0',
  INVALID_OFFER_PRICE: 'Offer price must be less than the original price',
  CATEGORY_ID_REQUIRED: 'Category ID is required',

  // Category specific
  CATEGORY_NAME_REQUIRED: 'Category name is required',
  CATEGORY_EXISTS: 'Category with this name already exists',
} as const;

export type ErrorCode = keyof typeof ERROR_CODES;
