var admin = require("firebase-admin");

var serviceAccount = require("D:/flutter_push_notify/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var registrationToken = 'ddo8ejNtT3qN9D8-Z5NWHU:APA91bEThIUWrOm8JHjM_uceuZfh_fF6c4qqdy6KWN9ewAi-sXs8VjW_MnB0OJJLwskCn-zHEs13q_R1ThPbtJh1josv5WNQkoMCxyDzJUNBbvrXVlVkocOFaVBbqzC6CZV6UPtYxevm';

var message = {
    notification: {
    title: 'Resumo',
    body: 'Leon System Developmentdsad asdsa d'
  },
//   token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.

admin.messaging().sendToTopic('SwitchButton',message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });