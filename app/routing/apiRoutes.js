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
  // console.log(newUser);
  var compScores = [];

  function checkCompatibility(member1, member2) {
    var totalDifference = 0;
    for (var i = 0; i < 10; i++) {
      totalDifference += Math.abs(parseInt(member1['scores[]'][i]) - parseInt(member2['scores[]'][i]));
    };
    return totalDifference;
  };


  for (var i = 0; i < data.users.length; i++) {
    var diffScore = checkCompatibility(data.users[i], newUser);
    var score = {
      user: i,
      diffScore: diffScore,
    };
    compScores.push(score)
  }

  var compatibleUser = compScores[0];
  for (var i = 0; i < compScores.length; i++) {
    if (compScores[i].diffScore < compatibleUser.diffScore) {
      compatibleUser = compScores[i];
    }
  }

  data.users.push(newUser);

  res.json(data.users[compatibleUser.user]);
});