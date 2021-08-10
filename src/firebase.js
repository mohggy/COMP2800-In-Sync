import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBovpMx804aweEkoC-97cw4kPBBf9wFtgc",
    authDomain: "insync-8f4e4.firebaseapp.com",
    projectId: "insync-8f4e4",
    storageBucket: "insync-8f4e4.appspot.com",
    messagingSenderId: "498833080321",
    appId: "1:498833080321:web:371fe186804fd9a0804000"
};

export const fire = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
  


