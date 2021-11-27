import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdDS3X3FuJFNS_2wqO3ndj9c8VXPLZiIo",
    authDomain: "piper-chats.firebaseapp.com",
    projectId: "piper-chats",
    storageBucket: "piper-chats.appspot.com",
    messagingSenderId: "166069668138",
    appId: "1:166069668138:web:68d38e766e6db18d58b653"
};

// Initialize Firebase
const app = !getApps.length() ?   initializeApp(firebaseConfig) : getApp()

const db = getFirestore();
const Storage = getStorage();
export { app, db, Storage };