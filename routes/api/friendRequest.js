const router = require("express").Router();
const db = require("../../models");
const friendRequestsController = require("../../controllers/friendRequestsController");

//Routes for friends
router.route("/:id/friends")
  .get(friendRequestsController.findAll)

router.route("/:id/friends/acceptedfriends")
  .put(friendRequestsController.update)

module.exports = router;
