import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC9NyZcSJU9N7amoICqvS00wH3n9pb4jwA",
  authDomain: "todoist-clone-tutorial-f47f2.firebaseapp.com",
  databaseURL: "https://todoist-clone-tutorial-f47f2.firebaseio.com",
  projectId: "todoist-clone-tutorial-f47f2",
  storageBucket: "todoist-clone-tutorial-f47f2.appspot.com",
  messagingSenderId: "201167002877",
  appId: "1:201167002877:web:b26d39cecf778077e3b294"
});

export { firebaseConfig as firebase };
