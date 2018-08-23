const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/wishlist")
  .post(usersController.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;