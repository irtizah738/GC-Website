import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optional integration: the marketing site and local demos do not require Firebase.
const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env;
const config = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};
const app = Object.values(config).every(Boolean) ? initializeApp(config) : null;
export const db = app ? getFirestore(app, env.VITE_FIRESTORE_DATABASE_ID || '(default)') : null;
export const auth = app ? getAuth(app) : null;
export default app;
