import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGoVJK_GhAf6mJ03GX95-IWPiE1gF5VkI",
  authDomain: "miniblog-edbcf.firebaseapp.com",
  projectId: "miniblog-edbcf",
  storageBucket: "miniblog-edbcf.appspot.com",
  messagingSenderId: "938507796623",
  appId: "1:938507796623:web:43f7f70e9feabf5b5630fa"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
