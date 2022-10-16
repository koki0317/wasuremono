// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADIAjHbQTluXpI_HlaRfwMiNGSo_j3JYY",
  authDomain: "wasuremono-e9766.firebaseapp.com",
  projectId: "wasuremono-e9766",
  storageBucket: "wasuremono-e9766.appspot.com",
  messagingSenderId: "665824075141",
  appId: "1:665824075141:web:c4675f8bad8baddb4b38ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
