import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyDVQlqdHHHp9Bk2B3SOiwBWjRPcLBH6hqk",
    authDomain: "shop-8c154.firebaseapp.com",
    databaseURL: "https://shop-8c154.firebaseio.com",
    projectId: "shop-8c154",
    storageBucket: "shop-8c154.appspot.com",
    messagingSenderId: "508572968186",
    appId: "1:508572968186:web:52a35b20088411ee80d543",
    measurementId: "G-FNVTWBX17N"
  };

  export const createUserProfileDocument= async (userAuth, additionalData)=> {

  if(!userAuth) return;
  const usersRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot= await usersRef.get();
  console.log('snapshot is:',snapShot);
  console.log('userAuth is ',userAuth);
  console.log('photurl is',userAuth.photoURL);
  
  if(!snapShot.exists){
    const {displayName, email, photoURL}= userAuth;
    const createdAt= new Date();
    try {
      await usersRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,

        // 'photoURL': userAuth.photoURL,
      })
    } catch (error) {
      console.log('error creating user', error.message);
      
    }
  }
  return usersRef;
  
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;