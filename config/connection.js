//this is the db connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  port: 3306,
  host: "localhost",
  username: "root",
  password: "Potter!!13",
  database: "farmstand_db",
  dialect: "mysql"
});


module.exports = sequelize;