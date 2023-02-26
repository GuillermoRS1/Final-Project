// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const enviroment = {
  apiKey: "AIzaSyCgtUFAonNUe7aB1P9Lu6dorllBj8aE0o4",
  authDomain: "finalproject-guillermo.firebaseapp.com",
  projectId: "finalproject-guillermo",
  storageBucket: "finalproject-guillermo.appspot.com",
  messagingSenderId: "528991098498",
  appId: "1:528991098498:web:5c69c7e0c35a1df75b069b",
  measurementId: "G-7QPH480MB5"
};

// Initialize Firebase
const app = initializeApp(enviroment);
const analytics = getAnalytics(app);