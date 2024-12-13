import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7Zy_baTH2ngW1tGV5BPI0F3D5zH1Nv_A",
  authDomain: "social-feed-22854.firebaseapp.com",
  projectId: "social-feed-22854",
  storageBucket: "social-feed-22854.appspot.com",
  messagingSenderId: "486831930426",
  appId: "1:486831930426:web:dddf36925488b5eb440903",
  measurementId: "G-866DWXXGBH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
