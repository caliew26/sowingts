const express = require("express");
const mysql = require("mysql2")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add route - this is where the code will go to find what it needs to do
app.use(routes);



// Start the API server
db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
  });
});