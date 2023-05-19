// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxbfVTOCT8BOEuyxC9UfSMWpuLP8zjIY",
  authDomain: "smart-kido-toy-market-place.firebaseapp.com",
  projectId: "smart-kido-toy-market-place",
  storageBucket: "smart-kido-toy-market-place.appspot.com",
  messagingSenderId: "111763683245",
  appId: "1:111763683245:web:9c672bb7b3ac0a8483d324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;