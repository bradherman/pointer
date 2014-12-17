var foundLocation, noLocation, getHeading, getAtan2, getLocation, getDistance;

// Get location after the template has rendered
Template.compass.rendered = getLocation();

// Gets the users location via geolocation API
function getLocation() {
  navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
}

// Sets session data after location is found
function foundLocation(location) {
  Session.set("lat2", location.coords.latitude);
  Session.set("lon2", location.coords.longitude);
  Session.set("heading", getHeading());
  Session.set("distance", getDistance());
}

// Alerts if no location data available
function noLocation() {
  alert("location not available");
}

// Fetches data and gets heading
function getHeading() {
  var lat1, lat2, lon1, lon2;

  lat1 = Session.get("lat1");
  lat2 = Session.get("lat2");
  lon1 = Session.get("lon1");
  lon2 = Session.get("lon2");

  return Location.calculateHeading(lat1, lon1, lat2, lon2);
}

// Gets data and distance between the coords
function getDistance() {
  var lat1, lat2, lon1, lon2, dist;

  lat1 = Session.get("lat1");
  lat2 = Session.get("lat2");
  lon1 = Session.get("lon1");
  lon2 = Session.get("lon2");

  dist = Location.distanceBetweenPoints(lat1, lon1, lat2, lon2);
  dist = Number((dist).toFixed(2));
  return dist.toString();
}