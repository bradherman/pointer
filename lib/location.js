Location = {
  // Converts degrees to radians
  // stolen from http://bit.ly/1qYXlHj
  deg2rad: function (deg) {
    return deg * (Math.PI / 180);
  },

  // Gets distance between points in km
  // stolen from http://bit.ly/1qYXlHj
  distanceBetweenPoints: function (lat1, lon1, lat2, lon2) {
    var R, dLat, dLon, a, c, d;

    R = 6371; // Radius of the earth in km
    dLat = Location.deg2rad(lat2 - lat1);  // deg2rad below
    dLon = Location.deg2rad(lon2 - lon1);
    a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(Location.deg2rad(lat1)) *
      Math.cos(Location.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    d = R * c; // Distance in km

    return d;
  },

  // Pulls data from session store and calculates
  // the compass bearing
  calculateHeading: function (lat1, lat2, lon1, lon2) {
    var rads, bearing;

    rads = Location.getAtan2((lon1 - lon2), (lat1 - lat2));

    bearing = rads * (180 / Math.PI);

    return bearing;
  },

  // Helper method for arctan
  getAtan2: function (y, x) {
    return Math.atan2(y, x);
  }
};