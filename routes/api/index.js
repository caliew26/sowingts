const router = require("express").Router();
const farmStandRoutes = require("./farmStand");

// farmStand routes
router.use("/farmStand", farmStandRoutes);

module.exports = router;
