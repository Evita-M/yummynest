CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  offerPrice REAL,
  description TEXT,
  createdAt TEXT NOT NULL,
  updatedAt TEXT NOT NULL,
  inStock BOOLEAN NOT NULL
);
