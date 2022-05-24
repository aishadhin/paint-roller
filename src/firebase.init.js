// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhnqJQGDHR-PkhzXjx7vZpJcpau5Bz-8Y",
    authDomain: "pain-roller.firebaseapp.com",
    projectId: "pain-roller",
    storageBucket: "pain-roller.appspot.com",
    messagingSenderId: "172275116890",
    appId: "1:172275116890:web:f7b9aa554a9e56217c2163"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
