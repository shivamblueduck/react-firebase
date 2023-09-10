import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo_dJ1bA3wT7v3vRk5zDqCCrtoogM-r8M",
  authDomain: "fir-auth-slu.firebaseapp.com",
  projectId: "fir-auth-slu",
  storageBucket: "fir-auth-slu.appspot.com",
  messagingSenderId: "569206836829",
  appId: "1:569206836829:web:633c9f1355c945a57487b4",
  measurementId: "G-90SFDLHLZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};
