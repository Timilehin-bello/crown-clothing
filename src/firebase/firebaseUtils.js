import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAGZw1p_68Kfg95ZQLVAzrI78WO9tnv_r4",
  authDomain: "crown-clothing-ecom.firebaseapp.com",
  databaseURL: "https://crown-clothing-ecom.firebaseio.com",
  projectId: "crown-clothing-ecom",
  storageBucket: "crown-clothing-ecom.appspot.com",
  messagingSenderId: "290876902303",
  appId: "1:290876902303:web:706c8a23d88fd975330baa",
  measurementId: "G-B5TPX9SN4G"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot); 

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

