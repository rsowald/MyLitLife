import firebase from "firebase/app";
// import firebasee from "firebase";

import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBSE_DOMAIN,
    authDomain: "group-7-project-3-bcs.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const provider = new firebase.auth.GoogleAuthProvider()
export default app;
