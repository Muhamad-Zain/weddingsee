// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, set, push, child } from 'firebase/database'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: "wedings-one",
  storageBucket: "wedings-one.firebasestorage.app",
  messagingSenderId: "49992893490",
  appId: "1:49992893490:web:4077263dec14a3dead682b",
  measurementId: "G-D3NM4LXBKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

// const analytics = getAnalytics(app);


// Send Data String to Firebase
const addDataToFirebase = async (id, formData) => {

    try {
      await set(ref(database, `/coppy-link/${id}`), formData);
      console.log("Data successfully added!");
    } catch (error) {
      console.error("Error adding data:", error);
    }
    
  };
  const fetchData = async (id) => {
    
    try {
        const dbRef = ref(database);
        const data = await get(child(dbRef, `/coppy-link/${id}`))
        if (data.exists()) {
            return data.val()
        } else {
            console.log('no data evaible');
            return null
        }
    } catch (error) {
        console.log('error fecth data', error);
        return null
    }
}


export {addDataToFirebase, fetchData}