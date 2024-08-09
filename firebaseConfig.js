// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7l4mGq_mxkA56dFGWGUsRXCsJIfPnXJs",
  authDomain: "prueba-desarrollodeapps.firebaseapp.com",
  projectId: "prueba-desarrollodeapps",
  storageBucket: "prueba-desarrollodeapps.appspot.com",
  messagingSenderId: "911530683472",
  appId: "1:911530683472:web:c5f6bc4de81ccb0488f555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app