//api talks to mysql database

const router = require("express").Router();
const db = require("../../models/farmStandModel.js");


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

router.post("/products", (req, res) => {
  db.products.findAll({})
  .then(products => {
    // console.log(products)
    res.json(products)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router;
