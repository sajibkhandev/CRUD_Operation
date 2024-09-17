// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM1trypXFbbSFcwpH7PVCJChrxVpcc7BQ",
  authDomain: "react-todo-cd43d.firebaseapp.com",
  projectId: "react-todo-cd43d",
  storageBucket: "react-todo-cd43d.appspot.com",
  messagingSenderId: "132916151991",
  appId: "1:132916151991:web:8403f2ac6af1c4c29fef32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig