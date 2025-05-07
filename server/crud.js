import { DB } from './connect.js';
import { v4 as uuidv4 } from 'uuid';

// Create
export const createProduct = async (name, description, price, offerPrice, inStock) => {
    const now = new Date().toISOString();
    const id = uuidv4();
    const sql = `
        INSERT INTO products (id, name, description, price, offerPrice, createdAt, updatedAt, inStock)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [id, name, description, price, offerPrice, now, now, inStock];

    return new Promise((resolve, reject) => {
        DB.run(sql, params, function(err) {
            if (err) return reject(err);
            resolve({ id });
        });
    });
};

// Read
export const readProducts = async () => {
    const sql = 'SELECT * FROM products';

    return new Promise((resolve, reject) => {
        DB.all(sql, [], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

// Update
export const updateProduct = async (id, name, description, price, offerPrice, inStock) => {
    const now = new Date().toISOString();
    const sql = `
        UPDATE products
        SET name = ?, description = ?, price = ?, offerPrice = ?, updatedAt = ?, inStock = ?
        WHERE id = ?
    `;
    const params = [name, description, price, offerPrice, now, inStock, id];

    return new Promise((resolve, reject) => {
        DB.run(sql, params, function(err) {
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

            // if (!row) {
            //     return reject(new Error('Product not found'));
            // }

            // If product exists, proceed with deletion
            DB.run(deleteSql, [id], function(err) {
                if (err) return reject(err);
                resolve({ id: this.lastID });
            });
        });
    });
};

// Optional: default export as an object
export default {
    createProduct,
    readProducts,
    updateProduct,
    deleteProduct
};
