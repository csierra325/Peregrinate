const router = require("express").Router();
const users = require("../../controllers/usersController");

//Routes for friends
router.route("/friends/:id")
  .get(users.findById)

module.exports = router;
