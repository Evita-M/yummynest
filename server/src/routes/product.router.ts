import express, { Router } from 'express';
import {
  httpGetAllProducts,
  httpGetProduct,
  httpCreateProduct,
  httpUpdateProduct,
  httpDeleteProduct,
  httpGetProductsByCategory,
} from '../controllers/product.controller';
import {
  validateProductCreate,
  validateProductUpdate,
  validateProductParams,
  validateProductCategoryParams,
} from '../middlewares/validation/product';

const routeInit = (): Router => {
  const productRouter = express.Router();

  productRouter.post('/', validateProductCreate, httpCreateProduct);
  productRouter.get('/', httpGetAllProducts);
  productRouter.get(
    '/category/:categoryId',
    validateProductCategoryParams,
    httpGetProductsByCategory
  );
  productRouter.get('/:id', validateProductParams, httpGetProduct);
  productRouter.put('/:id', validateProductUpdate, httpUpdateProduct);
  productRouter.delete('/:id', validateProductParams, httpDeleteProduct);

  return productRouter;
};

export default routeInit;
