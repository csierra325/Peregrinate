const router = require("express").Router();
const friendsList = require("../../controllers/friendslist");

// Matches with "/api/books"
router.route("/friends")
  .post(friendsList.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(friendsList.findById)
  .put(friendsList.update)
  .delete(friendsList.remove);

module.exports = router;