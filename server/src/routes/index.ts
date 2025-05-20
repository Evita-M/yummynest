import express, { Router } from 'express';
import productsRouter from './products/products.router';
import categoriesRouter from './categories/categories.router';

const routeInit = (): Router => {
  const router = express.Router();

  router.use('/products', productsRouter());
  router.use('/categories', categoriesRouter());

  return router;
};

export default routeInit;
