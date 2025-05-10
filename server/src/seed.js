import { DB } from './db.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create tables first
const createTablesSQL = `
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  offerPrice REAL,
  description TEXT,
  categoryId TEXT NOT NULL,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL,
  inStock BOOLEAN NOT NULL,
  FOREIGN KEY (categoryId) REFERENCES categories(id)
);`;

// Execute create tables statements
DB.exec(createTablesSQL, (err) => {
  if (err) {
    console.error('Error creating tables:', err);
    return;
  }
  console.log('Tables created successfully');

  // Read and execute seed data
  const seedSQL = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');

  // Split the SQL file into individual statements
  const statements = seedSQL.split(';').filter((statement) => statement.trim());

  // Execute each statement
  statements.forEach((statement) => {
    if (statement.trim()) {
      DB.run(statement, [], (err) => {
        if (err) {
          console.error('Error executing seed statement:', err);
        }
      });
    }
  });

  console.log('Seed data has been loaded successfully');
});
