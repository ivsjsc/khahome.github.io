// Firebase App (the core Firebase SDK) is always required and must be listed first
// Add Firebase SDKs via CDN in your HTML, not via import here
// Example (add to your HTML before this file):
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics-compat.js"></script>

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG07GMako6VHFQd3pkXEfaEDhzYi0uqf0",
  authDomain: "khadoremodeling.firebaseapp.com",
  projectId: "khadoremodeling",
  storageBucket: "khadoremodeling.appspot.com", // Sửa lại đúng domain
  messagingSenderId: "1034487944956",
  appId: "1:1034487944956:web:d24b816246a9ba25ade979",
  measurementId: "G-QGBPX8V5L9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (firebase.analytics) {
  firebase.analytics();
}
