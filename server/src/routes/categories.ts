import { getCategoryByName, readCategories } from '../managers/categories.js';
import express from 'express';

const routeInit = () => {
  const router = express.Router();

  // GET /api/categories - Retrieve all categories
  router.get('/', async (_req, res) => {
    try {
      const categories = await readCategories();
      res.status(200).json(categories);
    } catch (error) {
      console.error('Error retrieving categories:', error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to retrieve categories',
      });
    }
  });

  router.get('/:name', async (req, res) => {
    const { name } = req.params;
    try {
      const category = await getCategoryByName(name);
      res.status(200).json(category);
    } catch (error) {
      console.error('Error retrieving category:', error);
      res.status(500).json({
        status: 'error',
        message: `Failed to retrieve category: ${name}`,
      });
    }
  });

  return router;
};

export default routeInit;
