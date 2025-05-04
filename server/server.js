const express = require('express');
const cors = require('cors');
const dummyProducts = require('./data/products');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Sleep middleware
const sleepMiddleware = (delay = 2000) => {
  return (req, res, next) => {
    setTimeout(() => {
      next();
    }, delay);
  };
};

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Food Shop API' });
});

// Get all products
app.get('/api/products', sleepMiddleware(), async(req, res) => {
  try {
    const products = dummyProducts;
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get product by id
app.get('/api/products/:id', sleepMiddleware(), async(req, res) => {
  try {
    const product = dummyProducts.find(product => product.id === req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Get products by category
app.get('/api/:category', sleepMiddleware(), async(req, res) => {
  try {
    const categoryParam = req.params.category.toLowerCase();
    const products = dummyProducts.filter(product =>
      product.category.toLowerCase() === categoryParam
    );
    console.log('Category param:', categoryParam);
    console.log('Found products:', products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products of this category' });
  }
});


// Health check route
app.get('/api/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'Server is working correctly!',
    timestamp: new Date().toISOString(),
    data: {
      serverStatus: 'active',
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
    server.close();
    app.listen(PORT + 1, () => {
      console.log(`Server is running on port http://localhost:${PORT + 1}`);
    });
  } else {
    console.error('Server error:', err);
  }
});
