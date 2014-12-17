var foundLocation, noLocation, compassUrl, urlParams, getNumber, shareMessage, sendSms;

// Register button click event to get location
Template.share.events({
  'click .btn': function () {
    navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
  }
});

// Runs when location is found
// gets url and phone number, then shares via Twilio
function foundLocation(location) {
  var number, url;

  url = compassUrl(location.coords);
  number  = getNumber();

  sendSms(number, shareMessage(url));
}

// Alerts when location unavailable
function noLocation() {
  alert("location not available");
}

// Encodes the url for the compass
function compassUrl(coords) {
  var url;
  url = Meteor.absoluteUrl() + "compass?" + urlParams(coords);

  return url;
}

// Encodes the url params
function urlParams(coords) {
  return "lat=" + coords.latitude + "&lon=" + coords.longitude;
}

// Gets the number to share with and ensures
// the correct length
function getNumber() {
  var number;

  number = prompt("Enter number to share with", "5555555555");
  number = number.replace(/^1|-/g, '');

  if (number.length !== 10) {
    alert("invalid number");
    getNumber();
  } else {
    return number;
  }
}

// Encodes the message to share
function shareMessage(url) {
  return "See where I'm at! Click here: " + url;
}

// Sends the sms
function sendSms(number, message) {
  Meteor.call("sendsms", number, message);
}