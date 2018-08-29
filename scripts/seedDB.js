const mongoose = require("mongoose");
const db = require("../models");

// // This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/peregrinateUsers"
);

const travelListSeed = [
    {
        travels: ["Brazil"],
        travelItem: "",
      
      } 
];

db.Traveledlist
  .remove({})
  .then(() => db.User.collection.insertMany(travelListSeed))
  .then(data => {
    console.log(data.result.n + " travel list record inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const bucketlistSeed = [
    {
        travels: ["Brazil"],
        travelItem: "",
      
      } 
];

db.Bucketlist
  .remove({})
  .then(() => db.User.collection.insertMany(bucketlistSeed))
  .then(data => {
    console.log(data.result.n + " bucketlist record inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const FriendListSeed = [
    {
        travels: ["Brazil"],
        travelItem: "",
      
      } 
];

db.Friendlist
  .remove({})
  .then(() => db.User.collection.insertMany(FriendListSeed))
  .then(data => {
    console.log(data.result.n + " friend list record inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// const bookSeed = [
//   {
//     username: "gerard@gmail.com",
//     password: "pass",
//     date: new Date(Date.now())
//   }
  
// ];

// db.Users
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
