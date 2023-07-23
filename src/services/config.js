import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnVUAi9SDIP4XUyyjXp8qrvE31LHennD0",
  authDomain: "e-comercereact.firebaseapp.com",
  projectId: "e-comercereact",
  storageBucket: "e-comercereact.appspot.com",
  messagingSenderId: "899259845297",
  appId: "1:899259845297:web:60b72b461788d4f3b0b090"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);