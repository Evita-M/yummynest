const tseslint = require('@typescript-eslint/eslint-plugin');
const tseslintParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        browser: true,
        node: true,
        es6: true,
      },
    },
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**', '*.db'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Base ESLint rules
      'no-console': 'warn',
      'no-unused-vars': 'off', // Using typescript version instead
      '@typescript-eslint/no-unused-vars': 'warn',
      // Add more custom rules here
    },
  },
  // Add Prettier as the last config to override other formatting rules
  prettierConfig,
];
