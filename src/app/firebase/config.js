import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAriGj9-L-yaINXuPgdA7BQ6qoYTvtXQJ8",
  authDomain: "medi-care-b7f47.firebaseapp.com",
  projectId: "medi-care-b7f47",
  storageBucket: "medi-care-b7f47.appspot.com",
  messagingSenderId: "213213050087",
  appId: "1:213213050087:web:ff230918f3bf373d97de42",
  measurementId: "G-1M0QHZLFTV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);