// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYe6sXwSsiwMngbSWAZAFgk8I8W7Uq4bc",
  authDomain: "databasetest-855a8.firebaseapp.com",
  projectId: "databasetest-855a8",
  storageBucket: "databasetest-855a8.appspot.com",
  messagingSenderId: "765164206555",
  appId: "1:765164206555:web:d2f737c273f6db2b484ffe",
  measurementId: "G-PKFC0Y1CFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
