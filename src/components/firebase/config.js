import firebase from "firebase";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBY8aNdpFJZK6wGvGaCpEvItqxxFul3M_g",
    authDomain: "chat-app-6929f.firebaseapp.com",
    projectId: "chat-app-6929f",
    storageBucket: "chat-app-6929f.appspot.com",
    messagingSenderId: "212879312786",
    appId: "1:212879312786:web:0e38bfe22f3a168021e34b",
    measurementId: "G-ZFX9X18N21"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://127.0.0.1:9099');
if(window.location.hostname === 'localhost') {
    db.useEmulator('127.0.0.1', '8080')
}

export { auth, db };
export default firebase;