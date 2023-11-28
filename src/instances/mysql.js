const Sequelize = require("sequelize");

const sequelize = new Sequelize("phrases", "root", "rootLucas", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
