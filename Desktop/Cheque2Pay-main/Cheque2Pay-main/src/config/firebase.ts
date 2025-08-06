import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, PhoneAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB3Dg9DJYWJB1gO8HBwM8Ar1LA74YS9Zes",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "cheque2pay.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "cheque2pay",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "cheque2pay.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "881510222922",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:881510222922:web:e6bc6e065737f6608c6ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Auth providers
export const googleProvider = new GoogleAuthProvider();
export const phoneProvider = new PhoneAuthProvider(auth);

// Debug: Log Firebase initialization
console.log('Firebase initialized with config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  apiKey: firebaseConfig.apiKey ? '***' + firebaseConfig.apiKey.slice(-4) : 'not set'
});

export default app; 