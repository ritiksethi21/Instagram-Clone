 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDq2Z1_5iRIfGT92ka3WLou9WLCauTu9XI",
  authDomain: "instagram-clone-2112.firebaseapp.com",
  projectId: "instagram-clone-2112",
  storageBucket: "instagram-clone-2112.appspot.com",
  messagingSenderId: "162919398271",
  appId: "1:162919398271:web:23055989f56dd1056af84a",
  measurementId: "G-C7TRNJRQBK"
};
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
