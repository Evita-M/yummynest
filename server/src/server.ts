import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sleep from './middlewares/sleep';
import routeInit from './routes/index';
import db from './database/db';
import seedDatabase from './database/seed';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(sleep()); // Delay the response

app.use('/api', routeInit());

const startServer = async (port: number) => {
  try {
    await db.initialize();
    console.log('Database initialized');

    await seedDatabase();

    const server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    server.on('error', (err: NodeJS.ErrnoException) => {
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
