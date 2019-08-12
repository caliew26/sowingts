const router = require("express").Router();
const connection = require("../../config/connection.js");

module.exports = function(app){
  app.get("/api/all", function(req, res){
    let dbQuery = "SELECT * FROM farmstand_db";

    connection.query(dbQuery, function(err, result){
      if (err) throw err;
      res.json(result);
    });
  });

  app.post("/api/new", function(req, res){
    console.log("Produce: ");
    console.log(req.body);

    let dbQuery = "INSERT INTO farmstand_db (product_name, department, price, stock_ quantity) VALUES (?, ?, ?, ?)";

    connection.query(dbQuery, [req.body.product_name, req.body.department, req.body.price, req.body.stock_quantity], function(err, result){
      if(err) throw err;
      console.log("Product successfully saved!");
      res.end();
    });
  });
};
// // Matches with "/api/farmStand.js"
// router.route("/")
//   .get(farmStandController.findAll)
//   .post(farmStandController.create);

// // Matches with "/api/farmStand/:id"
// router
//   .route("/:id")
//   .get(farmStandController.findById)
//   .put(farmStandController.update)
//   .delete(farmStandController.remove);
// }
// module.exports = router;
