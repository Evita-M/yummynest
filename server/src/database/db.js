import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.sql3 = sqlite3.verbose();
    this.dbName = path.join(__dirname, './yummynest.db');
    this.db = null;

    Database.instance = this;
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.db = new this.sql3.Database(
        this.dbName,
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        (err) => {
          if (err) {
            reject(
              new Error('Failed to connect to the database: ' + err.message)
            );
          }
          console.log(
            'Successfully connected to the SQLite database (yummynest.db).'
          );
          resolve(this.db);
        }
      );
    });
  }

  async initialize() {
    await this.connect();
    await this.createCategoriesTable();
    await this.createProductsTable();

    return this;
  }

  createCategoriesTable() {
    const sql = `CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    )`;

    return new Promise((resolve, reject) => {
      this.db.run(sql, [], (err) => {
        if (err) {
          reject(new Error('Error creating categories table'));
        }
        console.log('Categories table created or already existed');
        resolve();
      });
    });
  }

  createProductsTable() {
    const sql = `CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      offerPrice REAL,
      description TEXT,
      categoryId TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      inStock BOOLEAN NOT NULL,
      reviews TEXT,
      FOREIGN KEY (categoryId) REFERENCES categories(id)
    )`;

    return new Promise((resolve, reject) => {
      this.db.run(sql, [], (err) => {
        if (err) {
          reject(new Error('Error creating products table'));
        }
        console.log('Products table created or already existed');
        resolve();
      });
    });
  }

  get() {
    return this.db;
  }
}

const db = Database.getInstance();

export default db;
