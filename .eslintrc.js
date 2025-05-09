module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Customize your rules
  },
  ignorePatterns: ['node_modules', 'dist', 'build', 'coverage'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
