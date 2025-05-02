import { DataSource } from 'typeorm';
import { Story } from '../entities/Story';
import { Comment } from '../entities/Comment';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'storyhub',
  synchronize: false,
  logging: true,
  entities: [Story, Comment],
  migrations: [
    'src/migrations/1706207489762-DropTables.ts',
    'src/migrations/1706207489763-CreateStoriesTable.ts',
    'src/migrations/1706207489764-CreateCommentsTable.ts'
  ],
  migrationsTableName: 'migrations',
}); 