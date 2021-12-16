import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChphPlaSvp1qfIw_19-Sf89jE20aMhVfo",
  authDomain: "estudy-tiktok.firebaseapp.com",
  projectId: "estudy-tiktok",
  storageBucket: "estudy-tiktok.appspot.com",
  messagingSenderId: "424619596322",
  appId: "1:424619596322:web:7fadac83fa4ec1e742887b",
  measurementId: "G-93GFEHMSXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export default firebase;
