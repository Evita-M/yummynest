import db from '../database/db.js';
import { v4 as uuidv4 } from 'uuid';

const createProduct = async (
  name,
  categoryId,
  description,
  price,
  offerPrice,
  inStock,
  reviews
) => {
  const database = db.get();
  const now = new Date().toISOString();
  const id = uuidv4();
  const sql = `
        INSERT INTO products (id, name, categoryId, description, price, offerPrice, createdAt, updatedAt, inStock, reviews)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const params = [
    id,
    name,
    categoryId,
    JSON.stringify(description),
    price,
    offerPrice,
    now,
    now,
    inStock,
    JSON.stringify(reviews),
  ];

  return new Promise((resolve, reject) => {
    database.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ id });
    });
  });
};

// Read
const readProducts = async () => {
  const database = db.get();
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
  `;

  return new Promise((resolve, reject) => {
    database.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      const products = rows.map((row) => ({
        ...row,
        description: row.description ? JSON.parse(row.description) : [],
        reviews: row.reviews ? JSON.parse(row.reviews) : null,
      }));
      resolve(products);
    });
  });
};

const readProduct = async (id) => {
  const database = db.get();
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
    WHERE p.id = ?
  `;

  return new Promise((resolve, reject) => {
    database.get(sql, [id], (err, row) => {
      if (err) return reject(err);
      if (row) {
        resolve({
          ...row,
          description: row.description ? JSON.parse(row.description) : [],
          reviews: row.reviews ? JSON.parse(row.reviews) : null,
        });
      } else {
        resolve(null);
      }
    });
  });
};

// Read by category
const readProductsByCategory = async (categoryName) => {
  const database = db.get();
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
    WHERE LOWER(c.name) = LOWER(?)
  `;

  return new Promise((resolve, reject) => {
    database.all(sql, [categoryName], (err, rows) => {
      if (err) return reject(err);
      const products = rows.map((row) => ({
        ...row,
        description: row.description ? JSON.parse(row.description) : [],
      }));
      resolve(products);
    });
  });
};

// Update
const updateProduct = async (
  id,
  name,
  categoryId,
  description,
  price,
  offerPrice,
  inStock,
  reviews
) => {
  const database = db.get();
  const now = new Date().toISOString();
  const sql = `
        UPDATE products
        SET name = ?, categoryId = ?, description = ?, price = ?, offerPrice = ?, updatedAt = ?, inStock = ?, reviews = ?
        WHERE id = ?
    `;

  const params = [
    name,
    categoryId,
    JSON.stringify(description),
    price,
    offerPrice,
    now,
    inStock,
    id,
  ];

  return new Promise((resolve, reject) => {
    database.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID });
    });
  });
};

// Delete
const deleteProduct = async (id) => {
  const database = db.get();
  const checkSql = 'SELECT id FROM products WHERE id = ?';
  const deleteSql = 'DELETE FROM products WHERE id = ?';

  return new Promise((resolve, reject) => {
    database.get(checkSql, [id], (err, row) => {
      if (err) return reject(err);

      database.run(deleteSql, [id], function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID });
      });
    });
  });
};

export {
  createProduct,
  readProducts,
  readProduct,
  readProductsByCategory,
  updateProduct,
  deleteProduct,
};
