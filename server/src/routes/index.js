import express from 'express';
import productsRouter from './products.js';
import categoriesRouter from './categories.js';

const routeInit = () => {
  const router = express.Router();

  router.use('/products', productsRouter());
  router.use('/categories', categoriesRouter());

  return router;
};

export default routeInit;
