const router = require("express").Router();
const db = require("../../models");
const friendRequestsController = require("../../controllers/friendRequestsController");

//Routes for friends
router.route("/friends/:id")
  .get(friendRequestsController.findAll)
  // .post(friendRequestsController.request);

router.route("/friends/:id/acceptedfriends")
  .put(friendRequestsController.update)

module.exports = router;
