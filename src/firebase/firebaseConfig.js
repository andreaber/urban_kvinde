import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1YDiXkNsrSO0Xg3EK10MtG-J-3RWbHg8",
  authDomain: "urbankvinde.firebaseapp.com",
  projectId: "urbankvinde",
  storageBucket: "urbankvinde.appspot.com",
  messagingSenderId: "99722534365",
  appId: "1:99722534365:web:850747bacbbeb0c00caa34"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


