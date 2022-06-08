// import firebase from 'firebase';
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
 
  collection,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDCqFQwVaUQEZPhhuvoeYuz_Ng2_u5Q2TU",
    authDomain: "netflix-clone-9d30f.firebaseapp.com",
    projectId: "netflix-clone-9d30f",
    storageBucket: "netflix-clone-9d30f.appspot.com",
    messagingSenderId: "1018310559602",
    appId: "1:1018310559602:web:9ac97ed87a09ad78857feb"
  };
  
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app);

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const registerWithEmailAndPassword = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };
  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
  };