import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  UserCredential,
  User,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../config/firebase';

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
}

// Email/Password Registration
export const registerWithEmail = async (
  email: string,
  password: string,
  displayName: string,
  phoneNumber?: string
): Promise<AuthUser> => {
  try {
    console.log('Attempting to register user:', { email, displayName });
    
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('User created successfully:', user.uid);

    // Update profile with display name
    if (displayName) {
      await updateProfile(user, { displayName });
      console.log('Profile updated with display name');
    }

    // Save additional user data to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      displayName: displayName,
      phoneNumber: phoneNumber || null,
      createdAt: new Date(),
      lastLogin: new Date()
    });
    
    console.log('User data saved to Firestore');

    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL
    };
  } catch (error: unknown) {
    console.error('Registration error:', error);
    if (error && typeof error === 'object' && 'code' in error) {
      throw new Error(getAuthErrorMessage(error.code as string));
    }
    throw new Error('An error occurred during registration');
  }
};

// Email/Password Login
export const loginWithEmail = async (email: string, password: string): Promise<AuthUser> => {
  try {
    console.log('Attempting to login user:', { email });
    
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    console.log('User logged in successfully:', user.uid);

    // Update last login
    await setDoc(doc(db, 'users', user.uid), {
      lastLogin: new Date()
    }, { merge: true });
    
    console.log('Last login updated in Firestore');

    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL
    };
  } catch (error: unknown) {
    console.error('Login error:', error);
    if (error && typeof error === 'object' && 'code' in error) {
      throw new Error(getAuthErrorMessage(error.code as string));
    }
    throw new Error('An error occurred during login');
  }
};

// Google Sign In
export const signInWithGoogle = async (): Promise<AuthUser> => {
  try {
    const userCredential: UserCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;

    // Save user data to Firestore if new user
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: user.displayName,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        createdAt: new Date(),
        lastLogin: new Date()
      });
    } else {
      // Update last login
      await setDoc(doc(db, 'users', user.uid), {
        lastLogin: new Date()
      }, { merge: true });
    }

    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL
    };
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
      throw new Error(getAuthErrorMessage(error.code as string));
    }
    throw new Error('An error occurred during Google sign-in');
  }
};

// Phone Number Authentication
export const signInWithPhone = async (phoneNumber: string, appVerifier: RecaptchaVerifier): Promise<string> => {
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    return confirmationResult.verificationId;
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
      throw new Error(getAuthErrorMessage(error.code as string));
    }
    throw new Error('An error occurred during phone authentication');
  }
};

// Logout
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
      throw new Error(getAuthErrorMessage(error.code as string));
    }
    throw new Error('An error occurred during logout');
  }
};

// Password Reset
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
      throw new Error(getAuthErrorMessage(error.code as string));
    }
    throw new Error('An error occurred during password reset');
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Auth state listener
export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};

// Test Firebase Authentication
export const testFirebaseAuth = async (): Promise<boolean> => {
  try {
    console.log('Testing Firebase Authentication...');
    // Try to create a test user (this will fail if auth is not enabled)
    const testEmail = `test-${Date.now()}@example.com`;
    const testPassword = 'testpassword123';
    
    const userCredential = await createUserWithEmailAndPassword(auth, testEmail, testPassword);
    console.log('Test user created successfully:', userCredential.user.uid);
    
    // Delete the test user
    await userCredential.user.delete();
    console.log('Test user deleted successfully');
    
    return true;
  } catch (error: unknown) {
    console.error('Firebase Authentication test failed:', error);
    if (error && typeof error === 'object' && 'code' in error) {
      const errorCode = error.code as string;
      if (errorCode === 'auth/operation-not-allowed') {
        console.error('Email/password authentication is not enabled in Firebase Console');
        return false;
      }
    }
    return false;
  }
};

// Error message helper
const getAuthErrorMessage = (errorCode: string): string => {
  console.log('Firebase error code:', errorCode);
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'No account found with this email address.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/email-already-in-use':
      return 'An account with this email already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters long.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again later.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in was cancelled.';
    case 'auth/invalid-phone-number':
      return 'Please enter a valid phone number.';
    case 'auth/invalid-verification-code':
      return 'Invalid verification code. Please try again.';
    case 'auth/operation-not-allowed':
      return 'Email/password authentication is not enabled. Please contact support.';
    case 'auth/requires-recent-login':
      return 'Please log in again to continue.';
    case 'auth/user-disabled':
      return 'This account has been disabled. Please contact support.';
    case 'auth/user-token-expired':
      return 'Your session has expired. Please log in again.';
    case 'auth/web-storage-unsupported':
      return 'Your browser does not support web storage. Please enable cookies.';
    default:
      return `Authentication error: ${errorCode}`;
  }
}; 