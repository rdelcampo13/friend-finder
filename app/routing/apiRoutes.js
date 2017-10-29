// Dependencies
// =============================================================
var path = require("path");
var bodyParser = require("body-parser");
var friendfinder = require(path.join(__dirname, "../../server.js"));
var data = require(path.join(__dirname, "../data/friends.js"));

// Sets up the Express app to handle data parsing
friendfinder.app.use(bodyParser.urlencoded({ extended: false }));
friendfinder.app.use(bodyParser.json());


// Routes
// =============================================================

// Get all users
friendfinder.app.get("/api/friends", function(req, res) {
  res.json(data.users);
});


// Create New Characters - takes in JSON input
friendfinder.app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newUser = req.body;
  newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

  console.log(newUser);

  characters.push(newUser);

  res.json(newUser);
});