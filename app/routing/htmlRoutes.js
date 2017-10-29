// Dependencies
// =============================================================
var friendfinder = require(path.join(__dirname, "../../server.js"));
var path = require("path");

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
friendfinder.app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

friendfinder.app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
