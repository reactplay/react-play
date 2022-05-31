import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZYpkA5loU8c-sCTs-MAX72Wxzpd5boiE",
  authDomain: "temptest-d31bf.firebaseapp.com",
  databaseURL:
    "https://temptest-d31bf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "temptest-d31bf",
  storageBucket: "temptest-d31bf.appspot.com",
  messagingSenderId: "377115257108",
  appId: "1:377115257108:web:db270715b421c7fe49ba01",
};

export const firebase = initializeApp(firebaseConfig);
