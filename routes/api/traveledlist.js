const router = require("express").Router();
const traveledList = require("../../controllers/traveledListController");

router
.route('/wishlist/traveledList/:id')
.get(traveledList.findAll)
.post(traveledList.create)

router.route("/wishlist")
  .post(traveledList.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(traveledList.findById)
  .put(traveledList.update)
  .delete(traveledList.remove);

module.exports = router;