
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi4qKe0sEKfMalWHDLXUQVAs3EEpVipqU",
  authDomain: "mutiat-331a7.firebaseapp.com",
  databaseURL: "https://mutiat-331a7-default-rtdb.firebaseio.com",
  projectId: "mutiat-331a7",
  storageBucket: "mutiat-331a7.firebasestorage.app",
  messagingSenderId: "646960533997",
  appId: "1:646960533997:web:0dc84709cbfa70e0c797e4",
  measurementId: "G-C8NG7B56JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };