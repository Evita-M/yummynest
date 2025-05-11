// Helper function to create SQL insert statement
const createInsertStatement = (table, columns, values) => {
  const placeholders = Array(columns.length).fill('?').join(', ');
  return `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;
};

export { createInsertStatement };
