// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtcA7kVFr1VjHY2zAdewyV9GIYTHrEcSU",
    authDomain: "e-com-b95a6.firebaseapp.com",
    projectId: "e-com-b95a6",
    storageBucket: "e-com-b95a6.appspot.com",
    messagingSenderId: "415536224755",
    appId: "1:415536224755:web:b40045043cc53079e61a86",
    measurementId: "G-KG6X8WLGD9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const storage=getStorage(app);
export const db=getFirestore(app);

export default app;