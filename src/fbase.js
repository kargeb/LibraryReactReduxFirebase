import firebase from "firebase";
import { firebaseConfig } from "./private";

firebase.initializeApp(firebaseConfig);

export const fbase = firebase.firestore();
