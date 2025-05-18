import { AppError } from './app-error';
import { Database } from 'sqlite3';
import { ErrorStatus } from './app-error';

const createInsertStatement = (table: string, columns: string[]) => {
  const placeholders = Array(columns.length).fill('?').join(', ');
  return `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;
};

const getDatabase = (db: { get: () => Database | null }) => {
  const database = db.get();
  if (!database) {
    throw new AppError(
      'Database connection not available',
      ErrorStatus.INTERNAL_SERVER_ERROR,
      false
    );
  }
  return database;
};

export { createInsertStatement, getDatabase };
