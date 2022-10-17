// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADIAjHbQTluXpI_HlaRfwMiNGSo_j3JYY",
  authDomain: "wasuremono-e9766.firebaseapp.com",
  projectId: "wasuremono-e9766",
  storageBucket: "wasuremono-e9766.appspot.com",
  messagingSenderId: "665824075141",
  appId: "1:665824075141:web:c4675f8bad8baddb4b38ec",
});

// Initialize Firebase

// Initialize Cloud Firestore and get a reference to the service
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
