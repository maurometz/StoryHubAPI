import { DataSource, DataSourceOptions } from 'typeorm';
import { Story } from '../entities/Story.js';
import { Comment } from '../entities/Comment.js';

const dbConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'storyhub',
  synchronize: true, // Enable this temporarily for development
  logging: true,
  entities: [Story, Comment]
};

console.log('Database configuration:', {
  ...dbConfig,
  password: '****' // Hide password in logs
});

export const AppDataSource = new DataSource(dbConfig); 