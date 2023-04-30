import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtpDH0lCKQM7g625GZfLOHhwbYkjW-c6E",
  authDomain: "comicmashup.firebaseapp.com",
  projectId: "comicmashup",
  storageBucket: "comicmashup.appspot.com",
  messagingSenderId: "261645427354",
  appId: "1:261645427354:web:29f07394cdfe8188f03523"
}; 

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore(app);
const projectStorage = firebase.storage(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };