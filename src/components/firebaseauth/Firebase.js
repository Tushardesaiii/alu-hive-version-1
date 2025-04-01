import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEc7gxjIPFZ820NI7d_zvxisCI9bfiIhg",
  authDomain: "alu-hive.firebaseapp.com",
  projectId: "alu-hive",
  storageBucket: "alu-hive.appspot.com",
  messagingSenderId: "577370606275",
  appId: "1:577370606275:web:e78895789566bfb02c7076",
  measurementId: "G-YNWXHPVF4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider }; // ✅ Correct named exports
