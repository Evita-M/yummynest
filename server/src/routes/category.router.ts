import express, { Router } from 'express';
import {
  httpCreateCategory,
  httpGetAllCategories,
  httpUpdateCategory,
  httpDeleteCategory,
} from '../controllers/category.controller';
import {
  validateCategoryCreate,
  validateCategoryUpdate,
  validateCategoryParams,
} from '../middlewares/validation/category';

const routeInit = (): Router => {
  const categoryRouter = express.Router();

  categoryRouter.post('/', validateCategoryCreate, httpCreateCategory);
  categoryRouter.get('/', httpGetAllCategories);
  categoryRouter.put('/:id', validateCategoryUpdate, httpUpdateCategory);
  categoryRouter.delete('/:id', validateCategoryParams, httpDeleteCategory);

  return categoryRouter;
};

export default routeInit;
