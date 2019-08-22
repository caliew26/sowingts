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
//cali notes:
// Route definition takes the following structure:
// app.METHOD(PATH, HANDLER)
// Where:

// app is an instance of express.
// METHOD is an HTTP request method, in lowercase.
// PATH is a path on the server.
// HANDLER is the function executed when the route is matched.

  //"/products" is the table name
  //this is a select all from the mysql database
  router.get("/products/:department", (req,res) => {
    db.products.findAll({
      where: {
        department: req.params.department
      }
    })
      .then (products => {
        // console.log(products)
        res.json(products)
      })
      .catch(err => {
        console.log(err)
      })
  })

  router.post("/admin/user", (req,res) => {
    db.users.findAll({})
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err)
    })
  })

    router.post("/admin/update/", (req,res) =>{
      db.products.update({available: req.body.available}, {where: {id: req.body.id}})
      res.send("stringgingy")
      console.log(req.body.available)
      console.log(req.body.id)
  // router.post("/admin/update/", (req,res) =>{
  //   db.products.findByPk(1).then(product => {
  //     console.log('Issue', product)
  //     // product.available = 1
  //     product.updateAttributes({
  //       available: 1
  //     })
  //     console.log("after update")
  //   })
    // db.products.find({ where: {id: 1} })
    //   .on('success', function(product){
    //     if(product){
    //       console.log("yippee!")
    //       console.log(JSON.stringify(product))
    //     } 
    //   })

    // res.json("thanks" + JSON.stringify(req.body))
    })
    // .then({

    // }).catch(err => {
    //   console.log(err)
    // })
  
  module.exports = router;
