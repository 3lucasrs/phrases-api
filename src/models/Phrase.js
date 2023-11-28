const { DataTypes } = require("sequelize");
const sequelize = require("../instances/mysql");

const Phrase = sequelize.define(
  "Phrase",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    author: {
      type: DataTypes.STRING,
    },
    txt: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Phrases",
    timestamps: false,
  }
);

module.exports = Phrase;
