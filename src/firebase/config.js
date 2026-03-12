import firebase from "firebase/app";
import 'firebase/firebase-firestore'
import 'firebase/auth'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbZtTHqCzGJZCpFu6a6ZQdgDrXwVgOyT8",
  authDomain: "vue-firebase-a3e9f.firebaseapp.com",
  projectId: "vue-firebase-a3e9f",
  storageBucket: "vue-firebase-a3e9f.firebasestorage.app",
  messagingSenderId: "451733548701",
  appId: "1:451733548701:web:a35cef62620cdfbafeee74",
  measurementId: "G-KQEV7HZ4TW"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp , projectAuth }

