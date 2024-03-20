// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-99c2b.firebaseapp.com",
  projectId: "mern-blog-99c2b",
  storageBucket: "mern-blog-99c2b.appspot.com",
  messagingSenderId: "1056038680029",
  appId: "1:1056038680029:web:7ed1ca2ef8cd62e953f234"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-blog-8c8dc.firebaseapp.com",
//   projectId: "mern-blog-8c8dc",
//   storageBucket: "mern-blog-8c8dc.appspot.com",
//   messagingSenderId: "620402854996",
//   appId: "1:620402854996:web:100737e3a7c9810b3231c1"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);