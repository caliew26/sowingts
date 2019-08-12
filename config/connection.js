//this is the db connection
const Sequelize = require('sequelize');

const sequelize = new sequelize({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Potter!!13",
  database: "farmstand_db"
});

// Connect to the database
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection
module.exports = sequelize;