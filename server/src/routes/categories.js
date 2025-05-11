import { readCategories } from '../managers/categories.js';
import express from 'express';

const routeInit = () => {
  const router = express.Router();

  // GET /api/categories - Retrieve all categories
  router.get('/', async (_req, res) => {
    try {
      const categories = await readCategories();
      res.status(200).json(categories);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  });

  return router;
};

export default routeInit;
