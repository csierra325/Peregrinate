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

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  console.log(`Production envo: ${process.env.NODE_ENV}`)
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Define API routes here
var databaseUri = "mongodb://localhost/peregrinate";

if (process.env.MONGODB_URI) {
mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);  
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
