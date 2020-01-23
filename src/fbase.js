import Rebase from "re-base";
import firebase from "firebase";
import firebaseData from "./pass";

const firebaseApp = firebase.initializeApp(firebaseData);

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };
