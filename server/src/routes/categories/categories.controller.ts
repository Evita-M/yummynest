import { Request, Response } from 'express';
import {
  getAllCategories,
  getCategoryByName,
} from 'server/src/models/categories';

// Read
async function httpGetAllCategories(_req: Request, res: Response) {
  const categories = await getAllCategories();
  return res.status(200).json(categories);
}

async function httpGetCategoryByName(req: Request, res: Response) {
  const { name } = req.params;
  const category = await getCategoryByName(name);
  return res.status(200).json(category);
}

export { httpGetAllCategories, httpGetCategoryByName };
