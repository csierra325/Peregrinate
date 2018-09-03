const router = require("express").Router();
// const db = require("../../models");
const usersController = require("../../controllers/usersController");
const friendRequestsController = require("../../controllers/friendRequestsController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);
// .get(usersController.find);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  // .get(usersController.findOne)
  .delete(usersController.remove);

// //Routes for friends
// router.route("/:id/friends")
//   .get(friendRequestsController.findAll)

// router.route("/:id/friends/acceptedfriends")
//   .put(friendRequestsController.update)


module.exports = router;
