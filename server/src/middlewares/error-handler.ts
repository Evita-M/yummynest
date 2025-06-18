import { Request, Response, NextFunction } from 'express';
import { Prisma } from '../../prisma/generated/client';
import { z } from 'zod';

export interface AppError extends Error {
  statusCode: number;
  code: string;
  isOperational: boolean;
  metadata?: any;
}

export class CustomError extends Error implements AppError {
  statusCode: number;
  code: string;
  isOperational: boolean;
  metadata?: any;

  constructor(
    message: string,
    statusCode: number = 500,
    code: string = 'INTERNAL_ERROR',
    isOperational: boolean = true,
    metadata?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
    this.metadata = metadata;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Global error handler:', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query,
    timestamp: new Date().toISOString(),
  });

  if (error instanceof CustomError) {
    const response: any = {
      error: error.message,
      code: error.code,
    };

    if (error.metadata) {
      response.metadata = error.metadata;
    }

    return res.status(error.statusCode).json(response);
  }

  if (error instanceof z.ZodError) {
    const errors = error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));

    return res.status(400).json({
      error: 'Validation failed',
      code: 'VALIDATION_ERROR',
      details: errors,
    });
  }

  // Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return res.status(409).json({
          error: 'A record with this data already exists',
          code: 'DUPLICATE_ENTRY',
        });
      case 'P2025':
        return res.status(404).json({
          error: 'Record not found',
          code: 'NOT_FOUND',
        });
      case 'P2003':
        return res.status(400).json({
          error: 'Foreign key constraint failed',
          code: 'FOREIGN_KEY_ERROR',
        });
      case 'P2014':
        return res.status(400).json({
          error:
            'The change you are trying to make would violate the required relation',
          code: 'RELATION_VIOLATION',
        });
      default:
        return res.status(400).json({
          error: 'Database operation failed',
          code: 'DB_ERROR',
        });
    }
  }

  if (error instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      error: 'Invalid data provided',
      code: 'VALIDATION_ERROR',
    });
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return res.status(500).json({
      error: 'Database connection failed',
      code: 'DB_CONNECTION_ERROR',
    });
  }

  return res.status(error.statusCode || 500).json({
    error:
      process.env.NODE_ENV === 'production'
        ? 'Something went wrong!'
        : error.message || 'An unexpected error occurred',
    code: error.code || 'INTERNAL_ERROR',
  });
};

export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
