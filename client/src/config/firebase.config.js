// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBXJcyj766zXuktAL8I_jEvBen26aUi4qQ",
	authDomain: "bites-5f433.firebaseapp.com",
	projectId: "bites-5f433",
	storageBucket: "bites-5f433.appspot.com",
	messagingSenderId: "692179032764",
	appId: "1:692179032764:web:561e7fd8ecfb570e320eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const profileImgCollectionRefference = collection(db, 'ProfileImg');

export const storage = getStorage(app);

// Authentication Module
export const auth = getAuth(app);
