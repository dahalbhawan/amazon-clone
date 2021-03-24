// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAd10St1aAAaQt_qu4_B6DrQSgbCi5gOJ4",
    authDomain: "clone-8406c.firebaseapp.com",
    projectId: "clone-8406c",
    storageBucket: "clone-8406c.appspot.com",
    messagingSenderId: "859662516348",
    appId: "1:859662516348:web:8aad9eba9a92fddfbf49f9",
    measurementId: "G-TT5E1K5BND"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }