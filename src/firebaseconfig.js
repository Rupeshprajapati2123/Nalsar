import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDjAX5REWluqFRVqCFq7Am_j0pMvS3WavU",

  authDomain: "test-a07c4.firebaseapp.com",

  projectId: "test-a07c4",

  storageBucket: "test-a07c4.appspot.com",

  messagingSenderId: "800863835073",

  appId: "1:800863835073:web:a0fc7acd084596a5271540",

  measurementId: "G-H8GM31SWGN"

};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app)