import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaDy61eOTWjffLZHPcCqaYctg9t-ibZLo",
  authDomain: "outstagram-bfabb.firebaseapp.com",
  databaseURL: "https://outstagram-bfabb.firebaseio.com",
  projectId: "outstagram-bfabb",
  storageBucket: "",
  messagingSenderId: "964356570864",
  appId: "1:964356570864:web:9b9b4e4912cdad17"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
