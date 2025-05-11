import { v4 as uuidv4 } from 'uuid';
import db from './db.js';
import { getCurrentDateTime, createInsertStatement } from '../utils/index.js';
import { categories, productsByCategory } from './data.js';

// Function to seed categories
const seedCategories = () => {
  return new Promise((resolve, reject) => {
    // Access the SQLite database object
    const database = db.get();

    // Clear existing categories
    database.run('DELETE FROM categories', [], (err) => {
      if (err) {
        console.error('Error clearing categories:', err);
        return reject(err);
      }

      const columns = ['id', 'name', 'createdAt', 'updatedAt'];
      const stmt = database.prepare(
        createInsertStatement('categories', columns)
      );

      let successCount = 0;
      categories.forEach((category) => {
        const now = getCurrentDateTime();
        stmt.run([category.id, category.name, now, now], function (err) {
          if (err) {
            console.error(`Error inserting category ${category.name}:`, err);
          } else {
            successCount++;
            if (successCount === categories.length) {
              console.log(`Successfully inserted ${successCount} categories`);
              resolve();
            }
          }
        });
      });

      stmt.finalize();
    });
  });
};

// Function to seed products
const seedProducts = () => {
  return new Promise((resolve, reject) => {
    // Access the SQLite database object
    const database = db.get();

    // Clear existing products
    database.run('DELETE FROM products', [], (err) => {
      if (err) {
        console.error('Error clearing products:', err);
        return reject(err);
      }

      const columns = [
        'id',
        'name',
        'categoryId',
        'description',
        'price',
        'offerPrice',
        'createdAt',
        'updatedAt',
        'inStock',
      ];
      const stmt = database.prepare(createInsertStatement('products', columns));

      let productCount = 0;
      const allProducts = Object.values(productsByCategory).flat();

      allProducts.forEach((product) => {
        const id = uuidv4();
        const now = getCurrentDateTime();

        stmt.run(
          [
            id,
            product.name,
            product.categoryId,
            product.description,
            product.price,
            product.offerPrice,
            now,
            now,
            product.inStock,
          ],
          function (err) {
            if (err) {
              console.error(`Error inserting product ${product.name}:`, err);
            } else {
              productCount++;
              if (productCount === allProducts.length) {
                console.log(`Successfully inserted ${productCount} products`);
                resolve();
              }
            }
          }
        );
      });

      stmt.finalize();
    });
  });
};

// Main seeding function
const seedDatabase = async () => {
  try {
    // Seed data
    await seedCategories();
    await seedProducts();

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Run the seeder
export default seedDatabase;
