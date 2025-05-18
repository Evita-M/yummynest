import db from '../database/db';
import { CategoryDatabaseRow } from '../types/index';
import { getDatabase } from '../utils/db-helpers';

const SQL_QUERIES = {
  GET_ALL_CATEGORIES: 'SELECT id, name, createdAt, updatedAt FROM categories',
  GET_CATEGORY_BY_NAME: 'SELECT id FROM categories WHERE name = ?',
} as const;

const ERROR_MESSAGES = {
  GET_CATEGORY_FAILED: 'Failed to get category:',
  CATEGORY_NOT_FOUND: 'Category with name "%s" not found',
  READ_CATEGORIES_FAILED: 'Failed to read categories:',
} as const;

const getCategoryByName = async (
  name: string
): Promise<CategoryDatabaseRow> => {
  if (!name?.trim()) {
    throw new Error('Category name is required');
  }

  const database = getDatabase(db);
  return new Promise((resolve, reject) => {
    database.get(
      SQL_QUERIES.GET_CATEGORY_BY_NAME,
      [name.trim()],
      (err: Error | null, row: CategoryDatabaseRow) => {
        if (err) {
          return reject(
            new Error(`${ERROR_MESSAGES.GET_CATEGORY_FAILED} ${err.message}`)
          );
        }
        if (!row) {
          return reject(
            new Error(ERROR_MESSAGES.CATEGORY_NOT_FOUND.replace('%s', name))
          );
        }
        resolve(row);
      }
    );
  });
};

const readCategories = async (): Promise<CategoryDatabaseRow[]> => {
  const database = getDatabase(db);
  return new Promise((resolve, reject) => {
    database.all(
      SQL_QUERIES.GET_ALL_CATEGORIES,
      [],
      (err: Error | null, rows: CategoryDatabaseRow[]) => {
        if (err) {
          return reject(
            new Error(`${ERROR_MESSAGES.READ_CATEGORIES_FAILED} ${err.message}`)
          );
        }
        resolve(rows);
      }
    );
  });
};

export { getCategoryByName, readCategories };
