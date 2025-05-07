import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose()
const dbName = 'yummynest.db';

const DB = new sql3.Database(dbName, sqlite3.OPEN_READWRITE, connected)

function connected(err) {
  if (err) {
    return new Error('Error connecting to database');
  }
  console.log('Created the DB or SQLite DB does already exist');
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
)`

DB.run(sql, [], (err) => {
  if (err) {
   return new Error('Error creating products table');
 }
  console.log('Products table created or already existed')
})

export { DB };
