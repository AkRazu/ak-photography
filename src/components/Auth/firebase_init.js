// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZdW3X00yDv9YGnlRxA9YCUIyO_ZHMZs8",
  authDomain: "ak-photography-95ff7.firebaseapp.com",
  projectId: "ak-photography-95ff7",
  storageBucket: "ak-photography-95ff7.appspot.com",
  messagingSenderId: "124808809997",
  appId: "1:124808809997:web:5836aba68c6ba743370f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;