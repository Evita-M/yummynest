# Yummynest Food Shop ![In Progress](https://img.shields.io/badge/IN%20PROGRESS-C23F84)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

A full-stack food shop application built with React, Vite, Express, and Prisma ORM with PostgreSQL.

## 🚀 Features

- **Product Catalog** - Browse and view detailed product information with images, prices, descriptions, stock status etc.
- **Category-based Product Filtering** - Filter products by categories with dynamic breadcrumb navigation
- **Shopping Cart** - Add, remove, increment/decrement product quantities with persistent cart state
- **Database ORM** - Prisma ORM with PostgreSQL for robust data management
- **RESTful API** - Complete CRUD operations for products and categories
- **Data Validation** - Comprehensive input validation with custom validators using Zod

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- PNPM (v8 or later)
- PostgreSQL database

### Installation

1. Clone the repository

2. Install dependencies

```bash
pnpm install
```

> **Note**: The Prisma client is automatically generated after running `pnpm install` via the postinstall script.

3. Set up environment variables:

Create a `.env` file in the `server` directory:

```env
POSTGRES_DATABASE_URL="postgresql://username:password@localhost:5432/food_shop"
```

4. Set up the database:

```bash
# Run database migrations
pnpm --filter food-shop-server db:migrate

# Seed the database with sample data (optional)
pnpm --filter food-shop-server db:seed
```

## 📦 Project Structure

This project is a monorepo managed with PNPM workspaces:

```
food-shop/
├── client/                    # Vite-based React frontend
├── server/                    # Express backend with PostgreSQL
│   └── prisma/               # Database schema and migrations
├── .vscode/                  # VS Code settings
├── .husky/                   # Git hooks
```

## 🛢️ Database Schema

The application uses PostgreSQL with Prisma ORM. The main entities are:

- **Categories**: Product categories with unique names
- **Products**: Food items with pricing, descriptions, ratings, and category relationships
