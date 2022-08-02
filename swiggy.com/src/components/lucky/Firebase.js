import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxKJozDZoGSmNPuB1rLmowf5zvweIgXIs",
  authDomain: "subtle-well-328709.firebaseapp.com",
  projectId: "subtle-well-328709",
  storageBucket: "subtle-well-328709.appspot.com",
  messagingSenderId: "40392879078",
  appId: "1:40392879078:web:99f9a370aa3113cf77c427",
  measurementId: "G-D95138J1LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
// export default app;