const db = require("../models");

// Defining methods for the friendRequests
module.exports = {
  findAll: function(req, res) {
    db.friendRequests
      .find({
        $and: [
          { status: 1 },
          {
            $or: [
              {requester: req.params.id},
              {recipient: req.params.id}
            ]
          }
        ]
      })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.friendRequests
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  request: function(req, res) {
    db.friendRequests.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.friendRequests.findOneAndUpdate({
      requester: req.body.requester,
      recipient: req.body.recipient,
      status: 0
    },
    { $set: { status: 1 } })
    // .find({
    //   requster: req.body.requester,
    //   recipient: req.body.recipient,
    //   status: 1
    // })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.friendRequests
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
