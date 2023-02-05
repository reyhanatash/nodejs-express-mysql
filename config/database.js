require("./process.env");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql"
  }
);

module.exports = {
  sequelize,
  sa: sequelize.authenticate(),
};
