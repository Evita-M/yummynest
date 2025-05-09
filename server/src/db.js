import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose();
const dbName = './src/yummynest.db';

const DB = new sql3.Database(
  dbName,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  connected
);

function connected(err) {
  if (err) {
    throw new Error('Failed to connect to the database: ' + err.message);
  }
  console.log('Successfully connected to the SQLite database (yummynest.db).');
}

let sql = `CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  offerPrice REAL,
  description TEXT,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL,
  inStock BOOLEAN NOT NULL
)`;

DB.run(sql, [], (err) => {
  if (err) {
    return new Error('Error creating products table');
  }
  console.log('Products table created or already existed');
});

export { DB };
