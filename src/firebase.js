import { initializeApp } from 'firebase/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: 'AIzaSyBjFPD7kLk_L1398IQwoYx-6fZZxEmq--Y',
    authDomain: 'ordertech.firebaseapp.com',
    projectId: 'ordertech',
    storageBucket: 'ordertech.appspot.com',
    messagingSenderId: '788621259468',
    appId: '1:788621259468:web:a9a55a95d21828cf118869',
}
const firebase = initializeApp(firebaseConfig)
let db = firebase.firestore()
let storage = firebase.storage()

export { firebase, db, storage }
