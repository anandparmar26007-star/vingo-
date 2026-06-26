/*
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-556bd.firebaseapp.com",
  projectId: "vingo-556bd",
  storageBucket: "vingo-556bd.firebasestorage.app",
  messagingSenderId: "443733179299",
  appId: "1:443733179299:web:6860c5c4daa3a48ff33816",
  measurementId: "G-RY9ZKVFJ59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth=getAuth(app)
export {app,auth}
*/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // અહીં import.meta.env વાળો ભાગ હટાવીને તમારી અસલી કી સીધી પેસ્ટ કરો:
  apiKey: "AIzaSyDy6qD7CrZ-0DlcOQZZx0e1HzsJGM0Btz8", 
  authDomain: "vingo-556bd.firebaseapp.com",
  projectId: "vingo-556bd",
  storageBucket: "vingo-556bd.firebasestorage.app",
  messagingSenderId: "443733179299",
  appId: "1:443733179299:web:6860c5c4daa3a48ff33816",
  measurementId: "G-RY9ZKVFJ59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// અહીં getAuth નો 'A' મોટો રાખજો
const auth = getAuth(app); 

export { app, auth };