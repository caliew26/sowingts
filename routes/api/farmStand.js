const router = require("express").Router();
const farmStandController = require("../../controllers/farmStandController");

// Matches with "/api/farmStand.js"
router.route("/")
  .get(farmStandController.findAll)
  .post(farmStandController.create);

// Matches with "/api/farmStand/:id"
router
  .route("/:id")
  .get(farmStandController.findById)
  .put(farmStandController.update)
  .delete(farmStandController.remove);

module.exports = router;
