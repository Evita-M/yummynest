import { NextFunction, Request, Response } from 'express';

const sleep = (delay: number = 2000) => {
  return (_req: Request, _res: Response, next: NextFunction) => {
    setTimeout(() => {
      next();
    }, delay);
  };
};

export default sleep;
