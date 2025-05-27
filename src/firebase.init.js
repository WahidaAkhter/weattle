// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWOFYYXFcOMUdd9SzR5nurEn11WWis5mg",
  authDomain: "weattle.firebaseapp.com",
  projectId: "weattle",
  storageBucket: "weattle.appspot.com",
  messagingSenderId: "183232597995",
  appId: "1:183232597995:web:2bb00d2048c5a21159d3ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;