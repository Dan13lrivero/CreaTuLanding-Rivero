import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAfmPRP4aJLhN_73_Kj4PHCXFLJlvD2Z4",
  authDomain: "proyecto-ecommerce-react-797cb.firebaseapp.com",
  projectId: "proyecto-ecommerce-react-797cb",
  storageBucket: "proyecto-ecommerce-react-797cb.appspot.com",
  messagingSenderId: "285959553135",
  appId: "1:285959553135:web:bfff4b2fb3f590fac94d9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
