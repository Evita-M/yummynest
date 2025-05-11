import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sleep from './middlewares/sleep.js';
import routeInit from './routes/index.js';
import db from './database/db.js';
import seedDatabase from './database/seed.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(sleep()); // Delay the response

app.use('/api', routeInit());

// Start server
const startServer = async (port) => {
  try {
    // Initialize database before starting the server
    await db.initialize();
    console.log('Database initialized');

    // Seed the database with initial data
    await seedDatabase();

    const server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}`);
        startServer(port + 1);
      } else {
        console.error('Server error:', err);
      }
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer(Number(PORT));
