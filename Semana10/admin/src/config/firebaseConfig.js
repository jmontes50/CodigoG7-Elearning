import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID
  };

const app = initializeApp(firebaseConfig);

// es una referencia al modulo de storage que estamos instanciando con nuestra configuración de firebase
const storage = getStorage(app)

export {
    storage
}