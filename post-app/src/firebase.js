import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGPu6PKs1T7144Yskd2CzKQoXv9zXN4uc",
    authDomain: "post-app-1000.firebaseapp.com",
    projectId: "post-app-1000",
    storageBucket: "post-app-1000.appspot.com",
    messagingSenderId: "520266817139",
    appId: "1:520266817139:web:2167a238d592e4b9f01406",
    measurementId: "G-2H5ZC9H7WS",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;