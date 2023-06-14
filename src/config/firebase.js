
import { initializeApp } from "firebase/app";
import {collection , getDocs ,getFirestore} from "firebase/firestore/lite"
const firebaseConfig = {
  apiKey: "AIzaSyA7gbMgzFYJORpSfxOAkMSWjdNl7X0t0v8",
  authDomain: "vanlife-6c093.firebaseapp.com",
  projectId: "vanlife-6c093",
  storageBucket: "vanlife-6c093.appspot.com",
  messagingSenderId: "876531952417",
  appId: "1:876531952417:web:cb35dee66f298f91c66c60"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
