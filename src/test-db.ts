import mysql from 'mysql2/promise';
import 'dotenv/config';

async function testConnection() {
  try {
    console.log('Testing database connection...');
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'storyhub'
    });

    console.log('Successfully connected to MySQL');
    
    const [rows] = await connection.query('SHOW DATABASES');
    console.log('Available databases:', rows);
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'storyhub'}`);
    console.log(`Database ${process.env.DB_NAME || 'storyhub'} is ready`);
    
    await connection.end();
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
  }
}

testConnection(); 