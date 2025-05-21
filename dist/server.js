"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const start = async () => {
    try {
        // Initialize database connection
        await database_1.AppDataSource.initialize();
        console.log('Database connection established');
        // Start the server
        await app_1.default.listen({ port: 3000, host: '0.0.0.0' });
        console.log('Server is running on http://localhost:3000');
        console.log('API documentation available at http://localhost:3000/documentation');
    }
    catch (err) {
        console.error('Error during startup:', err);
        process.exit(1);
    }
};
start();
