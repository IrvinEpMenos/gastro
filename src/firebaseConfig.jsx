// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; // Correct import for Firebase Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB26zi8RmgycCQi_4hq2TRPZXDluOqtZ4",
  authDomain: "neogastro-55724.firebaseapp.com",
  databaseURL: "https://neogastro-55724-default-rtdb.firebaseio.com",
  projectId: "neogastro-55724",
  storageBucket: "neogastro-55724.firebasestorage.app",
  messagingSenderId: "730580708829",
  appId: "1:730580708829:web:9d79845552526f48539a34",
  measurementId: "G-625B8GJ9Q5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Database
const database = getDatabase(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { database, auth };
