// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEnuG6UIqxkqJw-EfdN9oOTERSLhTwtjQ",
  authDomain: "netflixgpt-46b16.firebaseapp.com",
  projectId: "netflixgpt-46b16",
  storageBucket: "netflixgpt-46b16.firebasestorage.app",
  messagingSenderId: "25981458005",
  appId: "1:25981458005:web:940319ef41deca435fa6dc",
  measurementId: "G-E459G9M1SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);