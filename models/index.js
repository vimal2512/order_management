import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import orderModel from "./order.model.js";



const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.orders = orderModel(sequelize, Sequelize);

export default db;