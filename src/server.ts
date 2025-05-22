import 'reflect-metadata';
import 'dotenv/config';
import app from './app.js';
import { AppDataSource } from './config/database.js';

const start = async () => {
  try {
    console.log('Starting server...');
    console.log('Environment variables:', {
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_USER: process.env.DB_USER,
      DB_NAME: process.env.DB_NAME,
      DB_PASSWORD: process.env.DB_PASSWORD ? '****' : undefined
    });

    console.log('Initializing database connection...');
    await AppDataSource.initialize();
    console.log('Database connection established');

    console.log('Starting HTTP server...');
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server is running on http://localhost:3000');
    console.log('API documentation available at http://localhost:3000/documentation');
  } catch (err) {
    console.error('Error during startup:', err);
    if (err instanceof Error) {
      console.error('Error details:', {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
    }
    process.exit(1);
  }
};

start(); 