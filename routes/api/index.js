const router = require("express").Router();
const userRoutes = require("./users");
const profile = require("./profile");

// user routes
router.use("/users", userRoutes);

// profile routes
router.use("/profile", profile);


module.exports = router;
