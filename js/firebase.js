// js/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG07GMako6VHFQd3pkXEfaEDhzYi0uqf0",
  authDomain: "khadoremodeling.firebaseapp.com",
  projectId: "khadoremodeling",
  storageBucket: "khadoremodeling.firebasestorage.app",
  messagingSenderId: "1034487944956",
  appId: "1:1034487944956:web:d24b816246a9ba25ade979",
  measurementId: "G-QGBPX8V5L9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Nếu bạn muốn sử dụng Firestore, bạn sẽ thêm:
// import { getFirestore } from "firebase/firestore";
// export const db = getFirestore(app);

// Nếu bạn muốn sử dụng Authentication, bạn sẽ thêm:
// import { getAuth } from "firebase/auth";
// export const auth = getAuth(app);