const router = require("express").Router();
const bucketlist = require("../../controllers/bucketListController");

router
  .route('/wishlist/bucketlist/:id')
  .get(bucketlist.findAll)
  .post(bucketlist.create)

router.route("/wishlist")
  .post(bucketlist.create);

// Matches with "/api/wishlist/:id"
router
  .route("/wishlist/:id")
  .get(bucketlist.findById)
  .put(bucketlist.update)
  .delete(bucketlist.remove);

module.exports = router;
