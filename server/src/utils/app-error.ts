export const ErrorStatus = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

export interface HttpError extends Error {
  statusCode: number;
  status: string;
}

export class AppError extends Error implements HttpError {
  statusCode: number;
  status: string;

  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational?: boolean) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational =
      (isOperational ?? `${statusCode}`.startsWith('4')) ? true : false;
  }
}
