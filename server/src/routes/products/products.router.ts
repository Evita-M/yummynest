import express, { Router } from 'express';
import {
  httpGetAllProducts,
  httpGetProduct,
  httpCreateProduct,
  httpUpdateProduct,
  httpDeleteProduct,
} from './products.controller';

const routeInit = (): Router => {
  const productsRouter = express.Router();

  productsRouter.get('/', httpGetAllProducts);
  productsRouter.get('/:id', httpGetProduct);
  productsRouter.post('/', httpCreateProduct);
  productsRouter.put('/:id', httpUpdateProduct);
  productsRouter.delete('/:id', httpDeleteProduct);

  return productsRouter;
};

export default routeInit;
