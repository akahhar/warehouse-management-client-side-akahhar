// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAfPzQd6cBj3OHqBdK43zbv3ucgiJeTQXY",
  // authDomain: "wedding-moments-e90ae.firebaseapp.com",
  // projectId: "wedding-moments-e90ae",
  // storageBucket: "wedding-moments-e90ae.appspot.com",
  // messagingSenderId: "948698968213",
  // appId: "1:948698968213:web:d8d4e07f41b2e4a07b6b9c",

  apiKey: "AIzaSyDYuRHL5SPrnImZu8w4pbkbYVX-HNxbmM8",
  authDomain: "electro-house-f3254.firebaseapp.com",
  projectId: "electro-house-f3254",
  storageBucket: "electro-house-f3254.appspot.com",
  messagingSenderId: "1095679895846",
  appId: "1:1095679895846:web:c22e880139c237e7e239e7",

  // apiKey: process.env.apiKey,
  // authDomain: process.env.authDomain,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
