const router = require("express").Router();
const friendsPage = require("../../controllers/currentFriendController.js");

// Matches with "/api/books"
router.route("/friends")
  .post(friendsPage.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(friendsPage.findById)
  .put(friendsPage.update)
  .delete(friendsPage.remove);

module.exports = router;