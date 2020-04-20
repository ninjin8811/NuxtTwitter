import firebase from 'firebase/app'
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyCdx0ymc1J7Sn4Mhr94Pcn3B8vvEoqeU6Y",
  authDomain: "nuxttwitter.firebaseapp.com",
  databaseURL: "https://nuxttwitter.firebaseio.com",
  projectId: "nuxttwitter",
  storageBucket: "nuxttwitter.appspot.com",
  messagingSenderId: "131485059991",
  appId: "1:131485059991:web:df0c60d5b6af942cf652d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase