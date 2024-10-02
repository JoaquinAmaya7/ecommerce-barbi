// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3OHf6sQ_bpWjMLoTbybYQmJxN8fIK8Hs",
  authDomain: "ecommerce-barbi.firebaseapp.com",
  projectId: "ecommerce-barbi",
  storageBucket: "ecommerce-barbi.appspot.com",
  messagingSenderId: "534233306565",
  appId: "1:534233306565:web:a6f6297d6b8b24061ee7ac",
  measurementId: "G-CEJCY81KWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//npm install firebase

//npm install -g firebase-tools

//firebase login

//firebase init

//firebase deploy