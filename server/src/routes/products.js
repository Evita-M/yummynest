import {
  createProduct,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
  readProductsByCategory,
} from '../managers/products.js';

import express from 'express';

const routeInit = () => {
  const router = express.Router();

  // GET /api/products - Retrieve all products or filter by category
  router.get('/', async (req, res) => {
    try {
      const { category } = req.query;
      let rows;

      if (category) {
        console.log(`Fetching products for category: ${category}`);
        rows = await readProductsByCategory(category);
      } else {
        rows = await readProducts();
      }

      res.status(200).json(rows);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  });

  // POST /api/products - Create a new product
  router.post('/', async (req, res) => {
    const { name, categoryId, description, price, offerPrice, inStock } =
      req.body;

    if (!name || !categoryId || !price || inStock === undefined) {
      return res.status(400).json({
        error:
          'Missing required fields: name, categoryId, price, and inStock are required',
      });
    }

    try {
      const result = await createProduct(
        name,
        categoryId,
        description,
        price,
        offerPrice,
        inStock
      );
      res.status(201).json(`Product ${name} with id ${result.id} was added`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // GET /api/products/:id - Retrieve a specific product by ID
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const product = await readProduct(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // PUT /api/products/:id - Update a product
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, categoryId, description, price, offerPrice, inStock } =
      req.body;

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
        inStock
      );
      res.status(200).json(`Product ${name} with id ${id} was updated`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  // DELETE /api/products/:id - Delete a product
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
      await deleteProduct(id);
      res.status(200).json(`Product with id ${id} was deleted`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  return router;
};

export default routeInit;
