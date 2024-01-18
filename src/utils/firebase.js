// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI59qjejYebMeMszVQ7fuSdcshebLLBk4",
  authDomain: "netflixgpt-841c6.firebaseapp.com",
  projectId: "netflixgpt-841c6",
  storageBucket: "netflixgpt-841c6.appspot.com",
  messagingSenderId: "779168835155",
  appId: "1:779168835155:web:c93ff2b652a73d0febc8a6",
  measurementId: "G-KHQHYYSHB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();