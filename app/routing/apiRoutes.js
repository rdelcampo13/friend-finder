// Dependencies
// =============================================================
var path = require("path");
var bodyParser = require("body-parser");
var friends = require(path.join(__dirname, "../data/friends.js"));
var Friend = require(path.join(__dirname, "../data/Friend.js"));

module.exports.setRoute = function(app) {

  // Sets up the Express app to handle data parsing
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  // Routes
  // =============================================================

  // Get all users
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = new Friend(req.body.name, req.body.photo, req.body.scores);
    var compatibleFriend = newFriend.runCompTest(friends);

    friends.push(newFriend);
    res.json(friends[compatibleFriend.id]);
  });

};