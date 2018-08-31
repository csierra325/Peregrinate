const router = require("express").Router();
// const db = require("../../models");
const usersController = require("../../controllers/usersController");
const friendsController = require("../../controllers/currentFriendController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
  // .get(usersController.find);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

//Routes for friends
router.route("/:id/friends")
  .get(friendsController.findAll)


module.exports = router;
