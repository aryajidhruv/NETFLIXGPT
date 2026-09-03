// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKEUocTkKi_IvHO23JYcffW7Ln4ZH8Lyg",
  authDomain: "netflix-gpt-fc166a.firebaseapp.com",
  projectId: "netflix-gpt-fc166a",
  storageBucket: "netflix-gpt-fc166a.firebasestorage.app",
  messagingSenderId: "162624303196",
  appId: "1:162624303196:web:1e47afcf48366d81ebb699",
  measurementId: "G-5LLXSE26KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//auth
export const auth = getAuth();