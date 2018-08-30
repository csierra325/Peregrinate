const router = require("express").Router();
const bucketList = require("../../controllers/bucketListController");

router
  .route('/wishlist/bucketlist/:id')
  .get(bucketList.findAll)
  .post(bucketList.create)

router.route("/wishlist")
  .post(bucketList.create);

// Matches with "/api/wishlist/:id"
router
  .route("/wishlist/:id")
  .get(bucketList.findById)
  .put(bucketList.update)
  .delete(bucketList.remove);

module.exports = router;
