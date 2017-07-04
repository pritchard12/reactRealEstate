'use strict';

var firebase = require('firebase-admin');
const functions = require('firebase-functions');
var Promise = require('promise');
var escape = require('escape-html');


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmFHTR5pKa60qhrAU3km07Ki5gwJIpdTQ",
    authDomain: "real-estate-9d5a8.firebaseapp.com",
    databaseURL: "https://real-estate-9d5a8.firebaseio.com",
    projectId: "real-estate-9d5a8",
    storageBucket: "real-estate-9d5a8.appspot.com",
    messagingSenderId: "975717440130"
  };

  
  firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: "real-estate-9d5a8",
    clientEmail: "firebase-adminsdk-kmws2@real-estate-9d5a8.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCsgKYPd8AUS6s\n9pZ9fAw1Twd5IxaMKdLyEtLDiJhRyMjd2+fboealazwVXnBvs7n+a0mhbJeMofb1\nnhBgm3Tn8R727pgfhH+Pcm5+KRdZhjl6xZ08C2wzcf53LOejwtgWBUwQt32mOzDd\nJYuSBgUFpa9TqJdH0/XryxzwVicucwBjlFzVAdJ1A9VllRRU/Jdrzcwji3uvR8Vz\n6QTFUzWPP5tyRHvmxYVcVe5Fzhn4AdjgdPmLfzipvunFC7FTZ7IskEK9ETx4v3iK\nPGvsC1dSNIBysMZrtuASCScC0IgNZDIb+aTExYlx/0QM4apDF0YxcKU4vF9GnFJ4\n1fQQrLxPAgMBAAECggEACcnnZX4e2yY5wYp4UIDPIFMD3ixMcumbaH5XyGrytZHx\nv23R/3HpZcG5eJ2R65vOqyL7xbju+awe/YRf8GuAejTeSK4ASf1gaHbpZUBtoxuj\ngi+zUxSD8SY3FAjW8J3YPWswwtpm39e0AjpkBQh2ci09Xmhoirz2bU99+ftq5uPc\n1cDA+hclfvxf3ZzdU8OOY4TXS1UCJ8rqgPOOlrkKQIv0hf8X69fcdAKP7nZDkx1N\nACy3Ru1MfftTAyrxU4g3MZ9QDnNx8f/4FOtY0uxTR3PwFr8OQ27ZQo/O1VNLIY6F\nIzIhFTyIMX9klnK/WTnbGSp90OUeup95er68YdhEEQKBgQDpHB1V9Yx7iQnhRqkH\nEBlYcX44C9x0gWIt5hcKRBd55Nhocg6yyzI+plHniYG/QOmyDF9+/da6Y2JQ5VQr\njUd74d50X9ACh42WOVD9u2Ycb2rs5R6PRWGXtACeaYUD14m9+5LgUfjNYU3XKKVb\nDJndcn6sMebzIA0OPMmaiz43aQKBgQDV0DzHGUCyC8NYvB3vipZ5Fi9Zp1C/e9Fe\nYcNoa1pEv8CyWBx2we8WPYMPR6pIbYc+kNLIWi4r0f274BvdOEsK36vZQn1AqrvI\nm7SFZj4JkVkIvUOC3OdyranzLxQCAfsvs2Bz2hWT5TeEhc/deL8c1nDFGPD0hcvI\nJBoXb8hW9wKBgFbJ8OIgGb2kt9j3xdarV8Rl/OhBAkMeKL+N+uYHk/X+DdRVIsPO\ng1Zv9e6Oc5ARSvDPSn6tY1Thy6jyuPO+Fe85mOkbAwbuEPjtPgo5yzqrANRSOZ59\n5mfkzJYuEyfrB42ELJr36foNUD3bFDVh66dXCXJy4dmDBVlXqHexf+iBAoGBAKQr\n5U72y98p+w+aOd4g6pME/sx3FSBCISu4I0N9Em2xUnNeBlUFaeAI0SYdX9mHCA55\nQu+FlugcsBfe52ZAABbUUW5biDLsJY3OSJkZPU85ZES6lijYF3rNb64DGvjDrqwc\nrlWmQWUy3iMKX+Xs/clVuncMRI9sYGFHnyUZtplXAoGAWfbJya8jrPi5oMtfjhs3\n2xH66UVyhfxgeg5KFqibgVa8tHSQhbQPXJL4Hg2LOs6N8d7ibhq59qJvKirr4pBh\nTkoe7Rr1P/siDfkPJOISHUxrmn3brxfriz8mWIQBhxFXlXsiM+Z2dFfocpXhpvcr\nCAVEHFd0Ib90bpX9JEdUgbM=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://real-estate-9d5a8.firebaseio.com"
});

var database = firebase.database();
// Get a reference to the database service
//var database = firebase.database();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.getAgents = functions.https.onRequest((req, res) => {

  firebase.database().ref('/agents'
    ).once('value').then(function(snapshot) {
        res.send(snapshot.val());
    });
});

exports.getAll = functions.https.onRequest((req, res) => {

  firebase.database().ref('/'
    ).once('value').then(function(snapshot) {
        res.send(snapshot.val());
    });
});