import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLjUb2a9dyAylQHZVs4_7vgTMXSvtEH_c",
  authDomain: "traveler-app-123.firebaseapp.com",
  projectId: "traveler-app-123",
  storageBucket: "traveler-app-123.appspot.com",
  messagingSenderId: "487641875052",
  appId: "1:487641875052:web:c9a28705c48bdcc07d8e49",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
