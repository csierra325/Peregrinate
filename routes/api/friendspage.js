const router = require("express").Router();
const friends = require("../../controllers/friendRequestsController.js");

// Matches with "/api/books"
router.route("/")
  .get(friends.findAll)
  .post(friends.request);
  //new route for accepting 

// Matches with "/api/wishlist/:id"
router.route("/:id")
  .get(friends.findById)
  .put(friends.update)
  .delete(friends.remove);

module.exports = router;