const router = require("express").Router();
// const db = require("../../models");
const usersController = require("../../controllers/usersController");
// const friendRequestsController = require("../../controllers/friendRequestsController");
const bucketlistController = require("../../controllers/bucketListController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router.route("/:id([a-f\\d]{24})")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route("/:username")
  .get(usersController.findByUsername)
  // get(usersController.find);

  router.route("/wishlist/bucketlist/:id")
  .get(bucketlistController.findAll)
  .post(bucketlistController.create)
  
// //Routes for friends
// router.route("/:id/friends")
//   .get(friendRequestsController.findAll)

// router.route("/:id/friends/acceptedfriends")
//   .put(friendRequestsController.update)


module.exports = router;
