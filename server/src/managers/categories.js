import db from '../database/db.js';
import { v4 as uuidv4 } from 'uuid';

// New function to get category ID by name
const getCategoryByName = async (name) => {
  const database = db.get();
  const sql = 'SELECT id FROM categories WHERE name = ?';
  return new Promise((resolve, reject) => {
    database.get(sql, [name], (err, row) => {
      if (err) return reject(err);
      resolve(row); // Returns the row (which includes id) or undefined if not found
    });
  });
};

// New function to get all categories
const readCategories = async () => {
  const database = db.get();
  const sql = 'SELECT id, name, createdAt, updatedAt FROM categories';
  return new Promise((resolve, reject) => {
    database.all(sql, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

export { getCategoryByName, readCategories };
