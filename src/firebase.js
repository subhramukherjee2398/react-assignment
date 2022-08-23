import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCirg1C2IMITCJgmj8NRogzDLznvca4Ibo",
    authDomain: "webskitters-project.firebaseapp.com",
    projectId: "webskitters-project",
    storageBucket: "webskitters-project.appspot.com",
    messagingSenderId: "451693814909",
    appId: "1:451693814909:web:0a476bd9d651844d323d14"
  };

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {auth,googleAuthProvider,facebookAuthProvider};