const router = require("express").Router();
const userRoutes = require("./users");
const friendsRoutes = require("./friendspage");
const cities = require("./cities");
const currentfriends = require("./currentFriends");

// user routes
router.use("/users", userRoutes);
router.use("/friendspage", friendsRoutes);
router.use("/cities", cities);
router.use("/friends", currentfriends);



module.exports = router;
