import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbWBHExdr4vP3y8Raz9Rw_Orchz4ZNmns",
  authDomain: "vibechat-997f7.firebaseapp.com",
  projectId: "vibechat-997f7",
  storageBucket: "vibechat-997f7.firebasestorage.app",
  messagingSenderId: "405832939313",
  appId: "1:405832939313:web:a2f176c6e18444eb032210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;