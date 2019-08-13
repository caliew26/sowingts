// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var FarmStandModel = sequelize.define("farmStand", {
  product_name: Sequelize.STRING,
  department: Sequelize.STRING,
  price: Sequelize.STRING,
  stock_quantity: Sequelize.INTEGER
});

// Syncs with DB
FarmStandModel.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = FarmStandModel;