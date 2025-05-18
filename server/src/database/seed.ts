import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import db from './db';
import { categories, productsByCategory } from './data';
import { createInsertStatement, getCurrentDateTime } from '../utils/index';

const seedCategories = () => {
  return new Promise<void>((resolve, reject) => {
    const database = db.get();
    if (!database) {
      return reject(new Error('Database not found'));
    }

    database.run('DELETE FROM categories', [], (err: Error | null) => {
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

const seedProducts = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const database = db.get();
    if (!database) {
      return reject(new Error('Database not found'));
    }

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
        'reviews',
      ];
      const stmt = database.prepare(createInsertStatement('products', columns));

      let productCount = 0;
      const allProducts = Object.values(productsByCategory).flat();

      allProducts.forEach((product) => {
        const id = uuidv4();
        const now = getCurrentDateTime();
        const inStock = faker.datatype.boolean();
        const reviews = {
          rating: Math.round(faker.number.int({ min: 3, max: 5 }) / 0.5) * 0.5,
          count: faker.number.int({ min: 10, max: 60 }),
        };

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
            inStock,
            JSON.stringify(reviews),
          ],
          function (err: Error) {
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

const seedDatabase = async () => {
  try {
    await seedCategories();
    await seedProducts();

    console.log('Database seeded successfully!');
  } catch (error: unknown) {
    console.error('Error seeding database:', error);
  }
};

export default seedDatabase;
