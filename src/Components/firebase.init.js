// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjKkXM5qplgLWHmfelnLRbMNNa16vp9Sg",
  authDomain: "the-dragon-news-ae89f.firebaseapp.com",
  projectId: "the-dragon-news-ae89f",
  storageBucket: "the-dragon-news-ae89f.firebasestorage.app",
  messagingSenderId: "501720476663",
  appId: "1:501720476663:web:0a3f08df93c32eb0585cf2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
