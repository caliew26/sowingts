//api talks to mysql database

const router = require("express").Router();
const db = require("../../models");


//"/products" is the table name
//this is a select all from the mysql database
  router.get("/products", (req,res) => {
    db.products.findAll({})
      .then (products => {
        // console.log(products)
        res.json(products)
      })
      .catch(err => {
        console.log(err)
      })
  })


  //"/products" is the table name
  //this is a select all from the mysql database
  router.get("/products/:department", (req,res) => {
    db.products.findAll({
      where: {
        department: req.params.department
      }
    })
      .then (products => {
        // let departments = [],
        //   products.foreach{
        //     product_name: "",
        //     department: "",

            
        //   });
        // console.log(products)
        res.json(products)
      })
      .catch(err => {
        console.log(err)
      })
  })




  // router.post("/products", (req, res) => {
  //   db.products.findAll({})
  //   .then(dbproducts => {
  //     // console.log(products)
  //     res.json(dbproducts)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })

  module.exports = router;

