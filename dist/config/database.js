"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Story_1 = require("../entities/Story");
const Comment_1 = require("../entities/Comment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'storyhub',
    synchronize: false,
    logging: true,
    entities: [Story_1.Story, Comment_1.Comment],
    migrations: [
        'src/migrations/1706207489763-CreateStoriesTable.ts',
        'src/migrations/1706207489764-CreateCommentsTable.ts'
    ],
    migrationsTableName: 'migrations',
});
