// Helper function to format current date for SQLite
const getCurrentDateTime = () => {
  return new Date().toISOString();
};

export { getCurrentDateTime };
