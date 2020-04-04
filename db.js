const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
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
