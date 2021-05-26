 import firebase from "firebase";

const firebaseConfig = {
  // your own firebase configuration
};
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
