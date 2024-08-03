// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjvXv1cYrnzaq-CrcQ890b1Nn3rIxoF6c",
  authDomain: "inventory-management-c0a3b.firebaseapp.com",
  projectId: "inventory-management-c0a3b",
  storageBucket: "inventory-management-c0a3b.appspot.com",
  messagingSenderId: "909631957463",
  appId: "1:909631957463:web:44e15852071f2bd9050392",
  measurementId: "G-NPZWWRG2HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export{firestore}