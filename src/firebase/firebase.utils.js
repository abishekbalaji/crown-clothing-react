import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCnRQcJv5LxBM_HDGrSW-nXPFyMGawtCRI",
  authDomain: "crown-db-88ef3.firebaseapp.com",
  databaseURL: "https://crown-db-88ef3.firebaseio.com",
  projectId: "crown-db-88ef3",
  storageBucket: "crown-db-88ef3.appspot.com",
  messagingSenderId: "916322962125",
  appId: "1:916322962125:web:de328c1a3e17d6c06e7784",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
