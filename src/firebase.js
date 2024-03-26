// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBclilQckHfMGb3LXcmy5rpVwnYuklgfjA",
  authDomain: "react-ottservice.firebaseapp.com",
  projectId: "react-ottservice",
  storageBucket: "react-ottservice.appspot.com",
  messagingSenderId: "698908229151",
  appId: "1:698908229151:web:91a5b3f878c37e46131f2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
