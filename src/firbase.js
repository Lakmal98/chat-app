import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDCAw6ETXM_-g62Su_aJWbXr3NpB0M55tw',
  authDomain: 'chat-app-a9ca0.firebaseapp.com',
  projectId: 'chat-app-a9ca0',
  storageBucket: 'chat-app-a9ca0.appspot.com',
  messagingSenderId: '321644970819',
  appId: '1:321644970819:web:261a281b168e106a04a5f6',
  measurementId: 'G-P617KB6T27',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
