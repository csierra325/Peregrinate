const router = require("express").Router();
const bookRoutes = require("./users");

// user routes
router.use("/users", bookRoutes);

module.exports = router;
