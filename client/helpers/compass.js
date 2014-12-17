// Helpers for the compass data
Template.compass.helpers({
  lat1: function () {
    return Session.get("lat1");
  },
  lon1: function () {
    return Session.get("lon1");
  },
  lat2: function () {
    return Session.get("lat2");
  },
  lon2: function () {
    return Session.get("lon2");
  },
  heading: function () {
    return Session.get("heading");
  },
  distance: function () {
    return Session.get("distance");
  }
});