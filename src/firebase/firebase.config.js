// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQyEG3kShnwW-Ya0zeV65B1MUkWq46W2Q",
    authDomain: "chit-chat-d55bd.firebaseapp.com",
    projectId: "chit-chat-d55bd",
    storageBucket: "chit-chat-d55bd.appspot.com",
    messagingSenderId: "491107068046",
    appId: "1:491107068046:web:b182ac1ca5980a193541df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;