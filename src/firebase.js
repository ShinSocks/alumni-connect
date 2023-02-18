import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCm3RHMOcA05PJua473pNznV0mZRX29pM0",
  authDomain: "uccalum-38b4e.firebaseapp.com",
  projectId: "uccalum-38b4e",
  storageBucket: "uccalum-38b4e.appspot.com",
  messagingSenderId: "73457477538",
  appId: "1:73457477538:web:b5230355feb8d2eeb234fb",
  measurementId: "G-SKPXM13DG0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
