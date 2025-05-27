// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDQZyDpkLHnCyO6CDbT6-MvHEooJJvpBrQ",
    authDomain: "newnotification-786c7.firebaseapp.com",
    projectId: "newnotification-786c7",
    storageBucket: "newnotification-786c7.firebasestorage.app",
    messagingSenderId: "816282710646",
    appId: "1:816282710646:web:bc598d3b59c99af8f82557",
    measurementId: "G-R87TES5CK7"
  };
  

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };


