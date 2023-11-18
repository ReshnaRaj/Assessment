// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRYXu0VBT58YvJKQex9sqORe0Mv8o0HnU",
  authDomain: "otp-app-7827c.firebaseapp.com",
  projectId: "otp-app-7827c",
  storageBucket: "otp-app-7827c.appspot.com",
  messagingSenderId: "713404333638",
  appId: "1:713404333638:web:330d12192a1d9925239447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)