// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd9Hm72f54mAd2b_fNCBhq0uvqdkrS-tk",
  authDomain: "taskflow-auth.firebaseapp.com",
  projectId: "taskflow-auth",
  storageBucket: "taskflow-auth.appspot.com",
  messagingSenderId: "546573032881",
  appId: "1:546573032881:web:778ce6279a0c023ffc7190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;