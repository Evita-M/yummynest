import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import sleep from './middlewares/sleep';
import routeInit from './routes/index';
import { globalErrorHandler } from './middlewares/error-handler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(sleep()); // Delay the response

// Serve static files from the client build directory
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));

app.use('/api', routeInit());

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  }
});

// Global error handler
app.use(globalErrorHandler);

const startServer = async (port: number) => {
  try {
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
