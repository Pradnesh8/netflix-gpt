// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1_ctDPNASWxKcMdgfx2tiFQ2AV8sSfEQ",
    authDomain: "netflixgpt-e6189.firebaseapp.com",
    projectId: "netflixgpt-e6189",
    storageBucket: "netflixgpt-e6189.appspot.com",
    messagingSenderId: "384575307961",
    appId: "1:384575307961:web:78fc797c1f2fb500e89b68",
    measurementId: "G-ZFNBLHMT9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()