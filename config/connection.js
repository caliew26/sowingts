//this is the db connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Potter!!13",
  database: "farmstand_db"
});


module.exports = sequelize;