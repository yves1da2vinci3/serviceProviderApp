// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzN7O_Sc1sc36XhRVH9dcH3kvgJ_fNpHQ",
  authDomain: "serviceapp-d52d8.firebaseapp.com",
  projectId: "serviceapp-d52d8",
  storageBucket: "serviceapp-d52d8.appspot.com",
  messagingSenderId: "12185648991",
  appId: "1:12185648991:web:54c0680792039d6fcb00ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
const storage =  getStorage(app)
const db =  getFirestore(app)

export { app,auth,storage,db}