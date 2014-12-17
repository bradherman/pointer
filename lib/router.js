// Creates the routes for the app
Router.map(function () {
  // Main route for the app
  this.route("share", {path: "/"});

  // Route for sharing the users location
  this.route("compass", function () {
    var query;
    query = this.params.query;

    Session.set("lat1", query.lat);
    Session.set("lon1", query.lon);

    this.render("Compass");
  }, {name: "compass.show"});
});