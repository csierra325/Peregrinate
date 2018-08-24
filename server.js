const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const apiRoutes = require("./routes/api");
const routes = require("./routes");



// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Define API routes here
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peregrinateUsers");

// Send every other request to the React app
// Define any API routes before this runs

// app.post("/api/users", function (req, res) {
//   console.log(req.body);
//   db.User.create({ username: req.body.username, password: req.body.password }, function (err) {
//     if (err) {
//       console.log(err);
//     }
//     return res.status(500).send();
//   }).then(function (value) {
//     console.log(value);
//   });

//   //   try {
//   //     db.User.insertOne( { item: "card", qty: 15 } );
//   //  } catch (e) {
//   //     print (e);
//   //  };
//     return res.status(200).send();
// });


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
