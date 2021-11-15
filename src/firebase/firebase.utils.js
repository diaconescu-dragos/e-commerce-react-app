import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDF4GCATwNbLbMLivx_TRH0JgqOJzpDVY8",
    authDomain: "shop-db-c918d.firebaseapp.com",
    projectId: "shop-db-c918d",
    storageBucket: "shop-db-c918d.appspot.com",
    messagingSenderId: "956456268282",
    appId: "1:956456268282:web:56a45ac8d2760c03357443",
    measurementId: "G-M9FLDTP6NY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider)
  .catch((error) => {
      
  });

  export default firebase;