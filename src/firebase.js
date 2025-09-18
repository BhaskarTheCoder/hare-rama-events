// Import Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArpL_Uuh-7qouMaO9IwdzEAPQEJuSS3oI",
  authDomain: "hare-rama-events.firebaseapp.com",
  projectId: "hare-rama-events",
  storageBucket: "hare-rama-events.appspot.com",
  messagingSenderId: "1030961477566",
  appId: "1:1030961477566:web:8aaa00be25d8100a48abef",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);  // <-- Named export here
