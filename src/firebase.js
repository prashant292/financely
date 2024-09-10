// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDINwY3XlUY6oKVdInV3DqPDj38aDi6PvM",
  authDomain: "financely-8acc0.firebaseapp.com",
  projectId: "financely-8acc0",
  storageBucket: "financely-8acc0.appspot.com",
  messagingSenderId: "78951657940",
  appId: "1:78951657940:web:a7a628fcb584c79c3d6641",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };