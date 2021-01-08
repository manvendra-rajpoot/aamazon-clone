import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqQ-z3Jv37eh1KqZprDsc9QeEmHplnLZE",
    authDomain: "aamazoon-clone.firebaseapp.com",
    projectId: "aamazoon-clone",
    storageBucket: "aamazoon-clone.appspot.com",
    messagingSenderId: "97954645647",
    appId: "1:97954645647:web:1508fd6d026538187512fa",
    measurementId: "G-1V0ZW9287G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};