import 'reflect-metadata';
import 'dotenv/config';
import app from './app.js';
import { AppDataSource } from './config/database.js';

const start = async () => {
  try {
    // Initialize database connection
    await AppDataSource.initialize();
    console.log('Database connection established');

    // Start the server
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server is running on http://localhost:3000');
    console.log('API documentation available at http://localhost:3000/documentation');
  } catch (err) {
    console.error('Error during startup:', err);
    process.exit(1);
  }
};

start(); 