import { DataSource } from 'typeorm';
import { Story } from '../entities/Story';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'storyhub',
  synchronize: false, // Disable synchronize in favor of migrations
  logging: true,
  entities: [Story],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
}); 