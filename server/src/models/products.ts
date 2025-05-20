import {
  ProductDatabaseRow,
  transformDbRowToProduct,
  Product,
  ProductInput,
} from '../types/index';
import db from '../database/db';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase } from '../utils/db-helpers';

const createProduct = async (product: ProductInput): Promise<Product> => {
  const database = getDatabase(db);
  const now = new Date().toISOString();
  const id = uuidv4();
  const sql = `
        INSERT INTO products (id, name, categoryId, description, price, offerPrice, createdAt, updatedAt, inStock, reviews)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const params = [
    id,
    product.name,
    product.categoryId,
    JSON.stringify(product.description),
    product.price,
    product.offerPrice,
    now,
    now,
    product.inStock,
    JSON.stringify(product.reviews),
  ];

  return new Promise<Product>((resolve, reject) => {
    database.run(sql, params, async function (err) {
      if (err) return reject(err);

      // After successful insertion, fetch the complete product
      const selectSql = `
        SELECT p.*, c.name as categoryName
        FROM products p
        JOIN categories c ON p.categoryId = c.id
        WHERE p.id = ?
      `;

      database.get(selectSql, [id], (err: Error, row: ProductDatabaseRow) => {
        if (err) return reject(err);
        if (!row) return reject(new Error('Failed to fetch created product'));
        resolve(transformDbRowToProduct(row));
      });
    });
  });
};

// Read
const getAllProducts = async (): Promise<Product[]> => {
  const database = getDatabase(db);
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
  `;

  return new Promise((resolve, reject) => {
    database.all(sql, [], (err: Error | null, rows: ProductDatabaseRow[]) => {
      if (err) return reject(err);
      resolve(rows.map(transformDbRowToProduct));
    });
  });
};

const getProduct = async (id: string): Promise<Product | null> => {
  const database = getDatabase(db);
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
    WHERE p.id = ?
  `;

  return new Promise((resolve, reject) => {
    database.get(sql, [id], (err: Error, row: ProductDatabaseRow) => {
      if (err) return reject(err);
      if (row) {
        resolve(transformDbRowToProduct(row));
      } else {
        resolve(null);
      }
    });
  });
};

// Read by category
const readProductsByCategory = async (
  categoryName: string
): Promise<Product[]> => {
  const database = db.get();
  if (!database) {
    throw new Error('Database not found');
  }
  const sql = `
    SELECT p.*, c.name as categoryName
    FROM products p
    JOIN categories c ON p.categoryId = c.id
    WHERE LOWER(c.name) = LOWER(?)
  `;

  return new Promise((resolve, reject) => {
    database.all(
      sql,
      [categoryName],
      (err: Error, rows: ProductDatabaseRow[]) => {
        if (err) return reject(err);
        resolve(rows.map(transformDbRowToProduct));
      }
    );
  });
};

// Update
const updateProduct = async (
  id: string,
  productUpdateData: ProductInput
): Promise<Product> => {
  const database = db.get();
  if (!database) {
    throw new Error('Database not found');
  }
  const now = new Date().toISOString();
  const sql = `
        UPDATE products
        SET name = ?, categoryId = ?, description = ?, price = ?, offerPrice = ?, updatedAt = ?, inStock = ?, reviews = ?
        WHERE id = ?
    `;

  const params = [
    productUpdateData.name,
    productUpdateData.categoryId,
    JSON.stringify(productUpdateData.description),
    productUpdateData.price,
    productUpdateData.offerPrice,
    now,
    productUpdateData.inStock,
    JSON.stringify(productUpdateData.reviews),
    id,
  ];

  return new Promise((resolve, reject) => {
    database.run(sql, params, function (err) {
      if (err) return reject(err);

      const selectSql = `
        SELECT p.*, c.name as categoryName
        FROM products p
        JOIN categories c ON p.categoryId = c.id
        WHERE p.id = ?
      `;

      database.get(selectSql, [id], (err: Error, row: ProductDatabaseRow) => {
        if (err) return reject(err);
        if (!row) return reject(new Error('Failed to fetch updated product'));
        resolve(transformDbRowToProduct(row));
      });
    });
  });
};

// Delete
const deleteProduct = async (id: string): Promise<void> => {
  const database = getDatabase(db);
  const checkSql = 'SELECT id FROM products WHERE id = ?';
  const deleteSql = 'DELETE FROM products WHERE id = ?';

  return new Promise((resolve, reject) => {
    database.get(checkSql, [id], (err: Error, row: ProductDatabaseRow) => {
      if (err) return reject(err);
      if (!row) return reject(new Error('Product not found'));

      database.run(deleteSql, [id], (err: Error) => {
        if (err) return reject(err);
        resolve();
      });
    });
  });
};

export {
  createProduct,
  getAllProducts,
  getProduct,
  readProductsByCategory,
  updateProduct,
  deleteProduct,
};
