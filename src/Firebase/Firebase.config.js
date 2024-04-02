// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM0rO5rHKJdv658y_lf7qzMsakRSUU2oQ",
  authDomain: "auth-mohamilon-30a75.firebaseapp.com",
  projectId: "auth-mohamilon-30a75",
  storageBucket: "auth-mohamilon-30a75.appspot.com",
  messagingSenderId: "505996284488",
  appId: "1:505996284488:web:e6607806776c81561dbe7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth