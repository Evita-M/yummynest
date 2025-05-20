import express, { Router } from 'express';
import {
  httpGetAllCategories,
  httpGetCategoryByName,
} from './categories.controller';

const routeInit = (): Router => {
  const categoriesRouter = express.Router();

  categoriesRouter.get('/', httpGetAllCategories);
  categoriesRouter.get('/:name', httpGetCategoryByName);

  return categoriesRouter;
};

export default routeInit;
