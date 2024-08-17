import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBHRytkFtXzkjWaicpllbU1IOr8HNcFU4c",
    authDomain: "evoucher-web.firebaseapp.com",
    projectId: "evoucher-web",
    storageBucket: "evoucher-web.appspot.com",
    messagingSenderId: "761575514780",
    appId: "1:761575514780:web:f919c4ef1f011d681ac359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;