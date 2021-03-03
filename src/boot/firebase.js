// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";

// Your web app's Firebase configuration
import firebaseConfig from './../../firebase.config'

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }
