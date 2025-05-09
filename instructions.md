To set up your project with a monorepo structure using PNPM, TypeScript, and Prettier, follow these steps:

---

## 🗂️ Project Structure

Organize your project as follows:

```
my-project/
├── client/   # Vite-based frontend
├── server/   # Express backend
├── .vscode/
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
├── .eslintrc.js
├── .prettierrc
├── .prettierignore
├── .gitignore
└── .husky/
```

---

## 1. 🧰 Initialize the Monorepo

1. **Initialize the project and Git:**

   ```bash
   mkdir my-project && cd my-project
   pnpm init
   git init
   ```

2. **Set up PNPM workspace:**

   Create `pnpm-workspace.yaml`:

   ```yaml
   packages:
     - client
     - server
   ```

3. **Create client and server directories:**

   ```bash
   mkdir client server
   ```

---

## 2. 🧪 Set Up TypeScript

1. **Install TypeScript:**

   ```bash
   pnpm add -D typescript
   ```

2. **Create a base `tsconfig.json` at the root:**

   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "ESNext",
       "moduleResolution": "node",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true,
       "baseUrl": ".",
       "paths": {
         "*": ["node_modules/*"]
       }
     },
     "include": ["client", "server"]
   }
   ```

3. **Create `tsconfig.json` in both `client` and `server` directories extending the base config:**

   ```json
   {
     "extends": "../tsconfig.json",
     "compilerOptions": {
       "outDir": "dist"
     },
     "include": ["src"]
   }
   ```

---

## 3. 🎨 Set Up Prettier

1. **Install Prettier:**

   ```bash
   pnpm add -D prettier
   ```

2. **Create `.prettierrc` at the root:**

   ```json
   {
     "semi": true,
     "singleQuote": true,
     "printWidth": 80,
     "tabWidth": 2,
     "trailingComma": "es5"
   }
   ```

3. **Create `.prettierignore` at the root:**

   ```
   node_modules
   dist
   build
   coverage
   ```

---

## 4. 🔍 Set Up ESLint

1. **Install ESLint and necessary plugins:**

   ```bash
   pnpm add -D eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

2. **Create `.eslintrc.js` at the root:**

   ```javascript
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
   };
   ```

3. **Create `.eslintignore` at the root:**

   ```
   node_modules
   dist
   build
   coverage
   ```

---

## 5. 🧹 Set Up Husky and Lint-Staged

1. **Install Husky and Lint-Staged:**

   ```bash
   pnpm add -D husky lint-staged
   ```

2. **Initialize Husky:**

   ```bash
   pnpm exec husky install
   ```

3. **Add prepare script to `package.json`:**

   ```json
   "scripts": {
     "prepare": "husky install"
   }
   ```

4. **Set up pre-commit hook:**

   ```bash
   pnpm exec husky add .husky/pre-commit "pnpm exec lint-staged"
   ```

5. **Configure Lint-Staged in `package.json`:**

   ```json
   "lint-staged": {
     "**/*.{js,ts,tsx}": [
       "eslint --fix",
       "prettier --write"
     ]
   }
   ```

---

## 6. 🧪 Set Up Client and Server

### Client (Vite):

1. **Navigate to the client directory and create a Vite project:**

   ```bash
   cd client
   pnpm create vite
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Add scripts to `client/package.json`:**

   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview"
   }
   ```

### Server (Express):

1. **Navigate to the server directory and initialize the project:**

   ```bash
   cd ../server
   pnpm init
   ```

2. **Install Express and TypeScript dependencies:**

   ```bash
   pnpm add express
   pnpm add -D typescript ts-node-dev @types/node @types/express
   ```

3. **Create `src/index.ts` with a basic Express server:**

   ```typescript
   import express from 'express';

   const app = express();
   const PORT = process.env.PORT || 3000;

   app.get('/', (req, res) => {
     res.send('Hello World!');
   });

   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });
   ```

4. **Add scripts to `server/package.json`:**

   ```json
   "scripts": {
     "dev": "ts-node-dev src/index.ts",
     "build": "tsc",
     "start": "node dist/index.js"
   }
   ```

---

## 7. 🧪 VSCode Integration

1. **Create `.vscode/settings.json` at the root:**

   ```json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "eslint.validate": ["javascript", "typescript"],
     "editor.codeActionsOnSave": {
       "source.fixAll": true
     }
   }
   ```

---

## ✅ Final Steps

1. **Install all dependencies:**

   ```bash
   pnpm install
   ```

2. **Run the client and server:**

   ```bash
   pnpm --filter client dev
   pnpm --filter server dev
   ```

3. **Test pre-commit hook:**

   Make a change to a `.ts` file, stage it, and commit. The pre-commit hook should format and lint the code.

---

By following these steps, you'll have a monorepo setup with PNPM, TypeScript, Prettier, ESLint, Husky, and Lint-Staged, tailored for a Vite frontend and Express backend. This configuration ensures consistent code quality and streamlined development across your project.
