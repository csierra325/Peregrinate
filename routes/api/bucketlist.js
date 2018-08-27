const router = require("express").Router();
const bucketList = require("../../controllers/bucketList");

router.get('/wishlist/bucketlist/:id', function(req, res){
  db.bucketList.findAll({})
  .then(function(dbbucketList){
    res.json(dbbucketList);
  })
  .catch(function(err){
    res.json(err);
  })

})

router.post('/wishlist/bucketlist/:id', function(req, res){
  db.bucketList.create(req.body)
  .then(function(dbbucketList){
    res.json(dbbucketList)

  })
  .catch(function(err){
    res.json(err);
  })
})


// Matches with "/api/wishlist"
router.route("/wishlist")
  .post(bucketList.create);

// Matches with "/api/wishlist/:id"
router
  .route("/wishlist/:id")
  .get(bucketList.findById)
  .put(bucketList.update)
  .delete(bucketList.remove);

  

module.exports = router;
