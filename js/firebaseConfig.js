import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDX7y5FNf7_y-XsgWXtBKfRcfpti-KF050",
  authDomain: "projeto-teste-b4acc.firebaseapp.com",
  databaseURL: "https://projeto-teste-b4acc-default-rtdb.firebaseio.com",
  projectId: "projeto-teste-b4acc",
  storageBucket: "projeto-teste-b4acc.firebasestorage.app",
  messagingSenderId: "464116003303",
  appId: "1:464116003303:web:8ece26b5cfe9679ae24d42",
  measurementId: "G-Z1T7G4DJQD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };