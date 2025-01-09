import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAkQWMXsjfR1i2e_PvksSgHBDlB9T7OOm4",
  authDomain: "foodorderapp-c047b.firebaseapp.com",
  projectId: "foodorderapp-c047b",
  storageBucket: "foodorderapp-c047b.firebasestorage.app",
  messagingSenderId: "804851871652",
  appId: "1:804851871652:web:b8125ae8f3171051f89b31"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
