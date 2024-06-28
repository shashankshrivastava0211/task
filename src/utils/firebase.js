// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_scHWbwZmIvfccGc4H07Xog3_IY5qmZM",
  authDomain: "task-4c82e.firebaseapp.com",
  projectId: "task-4c82e",
  storageBucket: "task-4c82e.appspot.com",
  messagingSenderId: "162950538000",
  appId: "1:162950538000:web:445912d15328a1cf73bb95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()