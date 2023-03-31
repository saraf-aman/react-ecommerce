import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqlLFICu4dIcb7X7qnWVUMhng-wi_120g",
  authDomain: "react-ecommerce-db-d85c8.firebaseapp.com",
  projectId: "react-ecommerce-db-d85c8",
  storageBucket: "react-ecommerce-db-d85c8.appspot.com",
  messagingSenderId: "445963146643",
  appId: "1:445963146643:web:bc80060c06d93bcfdd0466",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  //if user data does not exists
  //create/set the document with the data from userAuth in my collection
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  //check if user data exists
  //return userDocRef
  return userDocRef;
};
