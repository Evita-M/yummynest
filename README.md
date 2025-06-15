# Food Shop ![In Progress](https://img.shields.io/badge/IN%20PROGRESS-C23F84)

A full-stack food shop application built with React, Vite, Express, and SQLite.

## Project Structure

This project is a monorepo managed with PNPM workspaces:

```
food-shop/
├── client/   # Vite-based React frontend
├── server/   # Express backend with SQLite
├── .vscode/  # VS Code settings
├── .husky/   # Git hooks
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- PNPM (v8 or later)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Development

Run both client and server in development mode:

```bash
pnpm dev
```

Or run them separately:

```bash
# Run only the client
pnpm dev:client

# Run only the server
pnpm dev:server
```

### Building for Production

Build both client and server:

```bash
pnpm build
```

## Tech Stack

### Frontend

- React 19
- Vite
- Redux Toolkit
- React Router
- TailwindCSS
- TypeScript

### Backend

- Express
- SQLite
- Node.js
- TypeScript

## Scripts

- `pnpm dev` - Run both client and server in development mode
- `pnpm build` - Build both client and server for production
- `pnpm lint` - Run ESLint on the entire project
- `pnpm format` - Format code with Prettier
