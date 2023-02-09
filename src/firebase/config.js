import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiKdmbeweAT7yDdXls6LWEGUIgKE-Bo30",
    authDomain: "olx-44860.firebaseapp.com",
    projectId: "olx-44860",
    storageBucket: "olx-44860.appspot.com",
    messagingSenderId: "58144638376",
    appId: "1:58144638376:web:7fafdecfca22f77f18c99d",
    measurementId: "G-21N3TLGHFQ"
  };

export default  firebase.initializeApp(firebaseConfig)