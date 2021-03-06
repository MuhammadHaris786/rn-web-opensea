import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA79P7Uce3w4GLRUS1GxJEm7-y8eDoVWIQ",
  authDomain: "opensea-237e3.firebaseapp.com",
  databaseURL: "https://opensea-237e3-default-rtdb.firebaseio.com",
  projectId: "opensea-237e3",
  storageBucket: "opensea-237e3.appspot.com",
  messagingSenderId: "469873512193",
  appId: "1:469873512193:web:33d4982a2e2028e8ead500",
  measurementId: "G-BYN4XTDQMV",
};
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
