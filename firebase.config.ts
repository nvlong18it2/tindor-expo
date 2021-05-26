const firebase = require("firebase");
const FirebaseKeys = {
    apiKey: "AIzaSyD8H7hEMBO_CkY_nc3HjYqP-bwicWpnBgo",
    authDomain: "tindor-5a376.firebaseapp.com",
    databaseURL: "https://tindor-5a376-default-rtdb.firebaseio.com",
    projectId: "tindor-5a376",
    storageBucket: "tindor-5a376.appspot.com",
    messagingSenderId: "1082296555305",
    appId: "1:1082296555305:web:6733fd7235a76e8593c938",
    measurementId: "G-9EEP82NRYJ"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseKeys);
  }

export default firebase; 
