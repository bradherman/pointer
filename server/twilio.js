// Registers a method to send sms via Twilio
Meteor.methods({
  sendsms: function (number, message) {
    var accountSid, authToken, twilio;

    accountSid = "AC7d2f210dfb1228bfb72429f37bcd55a6";
    authToken = "1118b6b713ece33c313c603d6c7a1b64";
    twilio = Twilio(accountSid, authToken);

    twilio.sendSms({
      to: "+1" + number,
      from: "+13176721149",
      body: message
    }, function (err, responseData) {
      console.log(err);
      console.log(responseData);
    });
  }
});