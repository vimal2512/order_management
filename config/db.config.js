import dotenv from 'dotenv';
dotenv.config();

export default { 
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: process.env.DB_PASSWORD,
  DB: 'order_management',
  dialect: 'postgres',
  PORT: 5432,
};