import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAy03irQDAIpToZr2IJ8ysomtwjOoIsugY",
    authDomain: "blog-react-8a7c1.firebaseapp.com",
    projectId: "blog-react-8a7c1",
    storageBucket: "blog-react-8a7c1.appspot.com",
    messagingSenderId: "1089277011355",
    appId: "1:1089277011355:web:6295d45451c31bdc8b6d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };