const router = require("express").Router();
const friendList = require("../../controllers/friendlist");

router.get('/wishlist/friendList/:id', function(req, res){
  db.friendList.findAll({})
  .then(function(dbfriendList){
    res.json(dbfriendList);
  })
  .catch(function(err){
    res.json(err);
  })

})

router.post('/wishlist/friendlist/:id', function(req, res){
  db.friendList.create(req.body)
  .then(function(dbfriendList){
    res.json(dbfriendList)

  })
  .catch(function(err){
    res.json(err);
  })
})


// Matches with "/api/books"
router.route("/wishlist")
  .post(friendList.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(friendList.findById)
  .put(friendList.update)
  .delete(friendList.remove);

module.exports = router;