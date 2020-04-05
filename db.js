const { Pool } = require("pg");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

console.log(isProduction);

const pool = new Pool({
  //database: "thermostat",
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});

module.exports = pool;

// const Sequelize = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "/Users/nimasoufiani/education/databases/thermostat",
// });

// const connect = async () => {
//   try {
//     sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// connect();

// module.exports = sequelize;
