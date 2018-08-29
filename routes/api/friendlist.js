const router = require("express").Router();
const friendList = require("../../controllers/friendListController");

router
  .route('/wishlist/friendList/:id')
  .get(friendList.findAll)
  .post(friendList.create)

router
  .route("/wishlist")
  .post(friendList.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(friendList.findById)
  .put(friendList.update)
  .delete(friendList.remove);

module.exports = router;