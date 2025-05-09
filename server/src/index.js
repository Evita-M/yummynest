import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  createProduct,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
} from './crud.js';
import sleep from './middleware/sleep.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/products', async (_req, res) => {
  try {
    const rows = await readProducts();

    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

app.post('/api/products', sleep(), async (req, res) => {
  const { name, description, price, offerPrice, inStock } = req.body;

  if (!name || !price || inStock === undefined) {
    return res.status(400).json({
      error: 'Missing required fields: name, price, and inStock are required',
    });
  }

  try {
    const result = await createProduct(
      name,
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

app.get('/api/products/:id', sleep(), async (req, res) => {
  const { id } = req.params;
  try {
    const product = await readProduct(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.put('/api/products/:id', sleep(), async (req, res) => {
  const { id } = req.params;
  const { name, category, description, price, offerPrice, inStock } = req.body;

  if (!name || !price || inStock === undefined) {
    return res.status(400).json({
      error: 'Missing required fields: name, price, and inStock are required',
    });
  }

  try {
    await updateProduct(
      id,
      name,
      category,
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

app.delete('/api/products/:id', sleep(), async (req, res) => {
  const { id } = req.params;

  try {
    await deleteProduct(id);
    res.status(200).json(`Product with id ${id} was deleted`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/api/test', (_req, res) => {
  res.json({
    status: 'success',
    message: 'Server is working correctly!',
    timestamp: new Date().toISOString(),
    data: {
      serverStatus: 'active',
      environment: process.env.NODE_ENV || 'development',
    },
  });
});

// Start server
const startServer = async (port) => {
  try {
    const server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}`);
        startServer(port + 1);
      } else {
        console.error('Server error:', err);
      }
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer(Number(PORT));
