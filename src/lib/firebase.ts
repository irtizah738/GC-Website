import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the Firebase configuration
let firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  firestoreDatabaseId: "(default)"
};

try {
  // @ts-ignore - This file might not exist yet
  const config = await import('../../firebase-applet-config.json');
  firebaseConfig = { ...firebaseConfig, ...config.default };
} catch (e) {
  console.warn("firebase-applet-config.json not found. Firebase features will be disabled until configured.");
}

// Initialize Firebase SDK
const app = initializeApp(firebaseConfig);

// Use the firestoreDatabaseId from the config if it exists
export const db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId || '(default)');
export const auth = getAuth(app);

export default app;
