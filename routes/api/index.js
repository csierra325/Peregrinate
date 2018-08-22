const router = require("express").Router();
const bookRoutes = require("./users");

// user routes   ***** NEED TO REPLACE *****
router.use("/users", bookRoutes);

module.exports = router;
