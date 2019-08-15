//says needs the api farmStand file and it will be referenced as farmStandRoutes

const router = require("express").Router();
const farmStandRoutes = require("./farmStand");

// farmStand routes
router.use("/farmStand", farmStandRoutes);

module.exports = router;
