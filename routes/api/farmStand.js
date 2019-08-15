//api talks to mysql database

const Router = require("express").Router();
const db = require("../../models/farmStandModel");


//"/products" is the table name
//this is a select all from the mysql database
Router.get("/api/products", (req,res) => {
  db.products.findAll({})
    .then (products => {
      // console.log(products)
      res.json(products)
    })
    .catch(err => {
      console.log(err)
    })

})

Router.post("/products", (req, res) => {
  db.products.findAll({})
  .then(products => {
    // console.log(products)
    res.json(products)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = Router;
