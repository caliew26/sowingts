//says needs the api farmStand file and it will be referenced as farmStandRoutes

const router = require("express").Router();
const farmStandRoutes = require("./farmstand");

// farmStand routes
router.use("/farmstand", farmStandRoutes);


module.exports = router;
