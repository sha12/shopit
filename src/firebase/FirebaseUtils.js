import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBmuXEx1lJyiaA3IT0PSoPt1eY8sOPt27g",
  authDomain: "shopit-5203b.firebaseapp.com",
  databaseURL: "https://shopit-5203b.firebaseio.com",
  projectId: "shopit-5203b",
  storageBucket: "shopit-5203b.appspot.com",
  messagingSenderId: "750438836502",
  appId: "1:750438836502:web:e0b35c75ad28c68a624837",
  measurementId: "G-WHR665NL0C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  var db = firebase.firestore();

  console.log(db.collection("users"));

  console.log(userRef);

  const snapShot = await userRef.get();

  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
