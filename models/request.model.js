const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Request = sequelize.define(
  "request",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    servicename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startdate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    route: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statuscode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

console.log(Request === sequelize.models.Request); // true
module.exports = Request;
