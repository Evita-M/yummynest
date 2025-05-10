import { DB } from './db.js';
import { v4 as uuidv4 } from 'uuid';

// Create
export const createProduct = async (
  name,
  categoryId,
  description,
  price,
  offerPrice,
  inStock
) => {
  const now = new Date().toISOString();
  const id = uuidv4();
  const sql = `
        INSERT INTO products (id, name, categoryId, description, price, offerPrice, createdAt, updatedAt, inStock)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  // Stringify the description array
  const descriptionString = JSON.stringify(description);

  const params = [
    id,
    name,
    categoryId,
    descriptionString,
    price,
    offerPrice,
    now,
    now,
    inStock,
  ];

  return new Promise((resolve, reject) => {
    DB.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ id });
    });
  });
};

// Read
export const readProducts = async () => {
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
  `;

  return new Promise((resolve, reject) => {
    DB.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      // Parse the description string for each product
      const products = rows.map((row) => ({
        ...row,
        description: row.description ? JSON.parse(row.description) : [],
      }));
      resolve(products);
    });
  });
};

export const readProduct = async (id) => {
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
    WHERE p.id = ?
  `;

  return new Promise((resolve, reject) => {
    DB.get(sql, [id], (err, row) => {
      if (err) return reject(err);
      // Parse the description string if product is found
      if (row) {
        resolve({
          ...row,
          description: row.description ? JSON.parse(row.description) : [],
        });
      } else {
        resolve(null); // Or handle as 'not found' appropriately
      }
    });
  });
};

// New function to get category ID by name
export const getCategoryByName = async (name) => {
  const sql = 'SELECT id FROM categories WHERE name = ?';
  return new Promise((resolve, reject) => {
    DB.get(sql, [name], (err, row) => {
      if (err) return reject(err);
      resolve(row); // Returns the row (which includes id) or undefined if not found
    });
  });
};

// Update
export const updateProduct = async (
  id,
  name,
  categoryId,
  description,
  price,
  offerPrice,
  inStock
) => {
  const now = new Date().toISOString();
  const sql = `
        UPDATE products
        SET name = ?, categoryId = ?, description = ?, price = ?, offerPrice = ?, updatedAt = ?, inStock = ?
        WHERE id = ?
    `;

  // Stringify the description array if it's being updated and is an array
  // Assuming description might also be a string directly from request, or needs stringifying
  const descriptionString =
    typeof description === 'string' ? description : JSON.stringify(description);

  const params = [
    name,
    categoryId,
    descriptionString,
    price,
    offerPrice,
    now,
    inStock,
    id,
  ];

  return new Promise((resolve, reject) => {
    DB.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID });
    });
  });
};

// Delete
export const deleteProduct = async (id) => {
  // First check if product exists
  const checkSql = 'SELECT id FROM products WHERE id = ?';
  const deleteSql = 'DELETE FROM products WHERE id = ?';

  return new Promise((resolve, reject) => {
    DB.get(checkSql, [id], (err, row) => {
      if (err) return reject(err);
      // If product exists, proceed with deletion
      DB.run(deleteSql, [id], function (err) {
        if (err) return reject(err);
        resolve({ id: this.lastID });
      });
    });
  });
};

export const getCategories = async () => {
  const sql = 'SELECT * FROM categories';
  return new Promise((resolve, reject) => {
    DB.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

// New function to get all categories
export const readCategories = async () => {
  const sql = 'SELECT id, name, createdAt, updatedAt FROM categories';
  return new Promise((resolve, reject) => {
    DB.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

export const readProductsByCategory = async (categoryName) => {
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
    WHERE LOWER(c.name) = LOWER(?)
  `;

  return new Promise((resolve, reject) => {
    DB.all(sql, [categoryName], (err, rows) => {
      if (err) return reject(err);
      // Parse the description string for each product
      const products = rows.map((row) => ({
        ...row,
        description: row.description ? JSON.parse(row.description) : [],
      }));
      resolve(products);
    });
  });
};

export default {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct,
  readCategories,
  readProductsByCategory,
};
