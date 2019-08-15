//model feeds to the db - via api/farmStand.js folder?

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// console.log(sequelize);

// Creates a "farmstand" model that matches up with DB
var products = sequelize.define("products", {
  product_name: Sequelize.STRING,
  department: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  stock_quantity: Sequelize.INTEGER
});

// Syncs with DB
products.sync();

// Makes the farmstand Model available for other files (will also create a table)
module.exports = products;