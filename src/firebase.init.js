// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfPzQd6cBj3OHqBdK43zbv3ucgiJeTQXY",
  authDomain: "wedding-moments-e90ae.firebaseapp.com",
  projectId: "wedding-moments-e90ae",
  storageBucket: "wedding-moments-e90ae.appspot.com",
  messagingSenderId: "948698968213",
  appId: "1:948698968213:web:d8d4e07f41b2e4a07b6b9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
