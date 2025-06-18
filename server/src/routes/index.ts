import express, { Router } from 'express';
import productRouter from './product.router';
import categoryRouter from './category.router';

const routeInit = (): Router => {
  const router = express.Router();

  router.use('/products', productRouter());
  router.use('/categories', categoryRouter());

  return router;
};

export default routeInit;
