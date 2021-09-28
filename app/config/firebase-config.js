import firebase from "firebase/compat/app"
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBKcIZegVst1iViHhuiX1P3R3BIBV7hXew",
  authDomain: "fbauth-de927.firebaseapp.com",
  projectId: "fbauth-de927",
  storageBucket: "fbauth-de927.appspot.com",
  messagingSenderId: "10571904998",
  appId: "1:10571904998:web:23943246c9c88e51250827" ,

  // apiKey: "AIzaSyAFc0Kl3ROZQNHDkUFP0FGM3_Fl62gSdh4",
  // authDomain: "milka-29fab.firebaseapp.com",
  // projectId: "milka-29fab",
  // storageBucket: "milka-29fab.appspot.com",
  // messagingSenderId: "644989010057",
  // appId: "1:644989010057:web:35dce0889e5b496b2c8658"
});

// console.log(db.FieldValue.serverTimestamp())

export const db = getFirestore(app);
export const auth = app.auth();
export default app;