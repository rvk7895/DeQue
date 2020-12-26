import firebase from 'firebase/app';
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyDdm5NkbL2fIH0q2RKR3jd28caYaIm9Qj8",
  authDomain: "deque-81b44.firebaseapp.com",
  projectId: "deque-81b44",
  storageBucket: "deque-81b44.appspot.com",
  messagingSenderId: "150979772660",
  appId: "1:150979772660:web:ed55f1da8a9497d8081ea1"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app