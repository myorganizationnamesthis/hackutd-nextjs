import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function initFirebase() {
    if (typeof window !== "undefined") {
        const app = initializeApp(clientCredentials);
        getAnalytics(app);
    }
}

const db = getFirestore(initializeApp(clientCredentials));

const storage = getStorage(initializeApp(clientCredentials));

export { initFirebase, db, storage };
