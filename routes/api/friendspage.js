const router = require("express").Router();
const friends = require("../../controllers/friendRequestsController.js");
// const users = require("../../controllers/usersController.js");

// Matches with "/api/friendspage/friends"
router.route("/friends")
  .get(friends.findAll)
  .post(friends.request);

// Matches with "/api/wishlist/:id"
router.route("/friends/:id")
  .get(friends.findById)
  .put(friends.update)
  .delete(friends.remove);

module.exports = router;