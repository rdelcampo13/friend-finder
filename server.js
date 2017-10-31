// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up routes
// =============================================================
var apiRoutes = require(path.join(__dirname, "app/routing/apiRoutes.js"));
apiRoutes.setRoute(app);

var htmlRoutes = require(path.join(__dirname, "app/routing/htmlRoutes.js"));
htmlRoutes.setRoute(app);

// Starts the server to begin listening
// =============================================================
app.listen(process.env.PORT, function() {
  console.log("App listening on PORT " + PORT);
});
