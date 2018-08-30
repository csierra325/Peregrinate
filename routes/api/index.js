const router = require("express").Router();
const userRoutes = require("./users");
const friendsRoutes = require("./friendspage");

// user routes
router.use("/users", userRoutes);
router.use("/friendspage", friendsRoutes);

module.exports = router;
