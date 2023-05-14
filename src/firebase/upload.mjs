import MOCK_DATA from '../data/MOCK_DATA.json' assert {type: "json"}
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from 'firebase/firestore'

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
const db = getFirestore(app)
const productsRef = collection(db, 'productos')

MOCK_DATA.forEach((item) => {
  delete item.id

  addDoc(productsRef, item)
})



