import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-szzXiQtlHHCKfSI8btkFD_aNOjA6WMc",
    authDomain: "myproject-f4e17.firebaseapp.com",
    projectId: "myproject-f4e17",
    storageBucket: "myproject-f4e17.appspot.com",
    messagingSenderId: "1010488130760",
    appId: "1:1010488130760:web:0ee8cc4c21bd5d5de339fd"
  };

firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const storageRef = firebase.storage();

  const auth = firebase.auth();

  const product = db.collection('Product');

  const cart = db.collection('Cart');

  export {db, storageRef, auth, product, cart};