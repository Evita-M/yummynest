import { Product } from '../types/index';
import {
  createProduct,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
  readProductsByCategory,
} from '../managers/products';

import express, { Router } from 'express';

const routeInit = (): Router => {
  const router = express.Router();

  // GET /api/products - Retrieve all products or filter by category
  router.get('/', async (req, res) => {
    try {
      const { category } = req.query;
      let rows;

      if (typeof category === 'string') {
        console.log(`Fetching products for category: ${category}`);
        rows = await readProductsByCategory(category);
      } else {
        rows = await readProducts();
      }

      res.status(200).json(rows);
    } catch (error: unknown) {
      console.log(error);
      res
        .status(500)
        .send(error instanceof Error ? error.message : 'Unknown error');
    }
  });

  // POST /api/products - Create a new product
  router.post('/', async (req, res) => {
    const {
      name,
      categoryId,
      description,
      price,
      offerPrice,
      inStock,
      reviews,
    } = req.body;

    if (!name || !categoryId || !price || inStock === undefined) {
      return res.status(400).json({
        error:
          'Missing required fields: name, categoryId, price, and inStock are required',
      });
    }

    try {
      const result: Product = await createProduct({
        name,
        categoryId,
        description,
        price,
        offerPrice,
        inStock,
        reviews,
      });
      res.status(201).json(`Product ${name} with id ${result.id} was added`);
    } catch (error: unknown) {
      console.log(error);
      res
        .status(500)
        .send(error instanceof Error ? error.message : 'Unknown error');
    }
  });

  // GET /api/products/:id - Retrieve a specific product by ID
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await readProduct(id);
      res.status(200).json(product);
    } catch (error: unknown) {
      console.log(error);
      res
        .status(500)
        .send(error instanceof Error ? error.message : 'Unknown error');
    }
  });

  // PUT /api/products/:id - Update a product
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {
      name,
      categoryId,
      description,
      price,
      offerPrice,
      inStock,
      reviews,
    } = req.body;

    if (!name || !categoryId || !price || inStock === undefined) {
      return res.status(400).json({
        error:
          'Missing required fields: name, categoryId, price, and inStock are required',
      });
    }

    try {
      await updateProduct(
        id,
        name,
        categoryId,
        description,
        price,
        offerPrice,
        inStock,
        reviews
      );
      res.status(200).json(`Product ${name} with id ${id} was updated`);
    } catch (error: unknown) {
      console.log(error);
      res
        .status(500)
        .send(error instanceof Error ? error.message : 'Unknown error');
    }
  });

  // DELETE /api/products/:id - Delete a product
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
      await deleteProduct(id);
      res.status(200).json(`Product with id ${id} was deleted`);
    } catch (error: unknown) {
      console.log(error);
      res
        .status(500)
        .send(error instanceof Error ? error.message : 'Unknown error');
    }
  });

  return router;
};

export default routeInit;
