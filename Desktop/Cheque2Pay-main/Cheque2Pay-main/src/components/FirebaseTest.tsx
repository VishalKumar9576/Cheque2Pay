import React, { useEffect, useState } from 'react';
import { auth, db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { testFirebaseAuth, registerWithEmail } from '../services/authService';

const FirebaseTest: React.FC = () => {
  const [firebaseStatus, setFirebaseStatus] = useState<string>('Checking...');
  const [authStatus, setAuthStatus] = useState<string>('Checking...');
  const [firestoreStatus, setFirestoreStatus] = useState<string>('Checking...');
  const [testEmail, setTestEmail] = useState<string>('test@example.com');
  const [testPassword, setTestPassword] = useState<string>('password123');
  const [testResult, setTestResult] = useState<string>('');

  useEffect(() => {
    // Test Firebase connection
    try {
      console.log('Testing Firebase connection...');
      setFirebaseStatus('Connected');
    } catch (error) {
      console.error('Firebase connection error:', error);
      setFirebaseStatus('Error: ' + (error as Error).message);
    }

    // Test Authentication
    try {
      console.log('Testing Authentication...');
      const currentUser = auth.currentUser;
      setAuthStatus(currentUser ? `User: ${currentUser.email}` : 'No user logged in');
    } catch (error) {
      console.error('Authentication error:', error);
      setAuthStatus('Error: ' + (error as Error).message);
    }

    // Test Firestore
    const testFirestore = async () => {
      try {
        console.log('Testing Firestore...');
        const querySnapshot = await getDocs(collection(db, 'users'));
        setFirestoreStatus(`Connected (${querySnapshot.size} users found)`);
      } catch (error) {
        console.error('Firestore error:', error);
        setFirestoreStatus('Error: ' + (error as Error).message);
      }
    };

    testFirestore();
  }, []);

  const testRegistration = async () => {
    try {
      console.log('Testing Firebase Authentication...');
      setAuthStatus('Testing Firebase Auth...');
      setTestResult('Testing...');
      
      const isAuthEnabled = await testFirebaseAuth();
      if (isAuthEnabled) {
        setAuthStatus('Firebase Auth: Enabled ✅');
        setTestResult('✅ Firebase Authentication is working!');
      } else {
        setAuthStatus('Firebase Auth: Not Enabled ❌');
        setTestResult('❌ Firebase Authentication is not enabled in Firebase Console');
      }
    } catch (error) {
      console.error('Registration test error:', error);
      setAuthStatus('Registration test failed: ' + (error as Error).message);
      setTestResult('❌ Test failed: ' + (error as Error).message);
    }
  };

  const testActualRegistration = async () => {
    try {
      console.log('Testing actual registration...');
      setTestResult('Testing actual registration...');
      
      const testEmailWithTimestamp = `test-${Date.now()}@example.com`;
      const result = await registerWithEmail(testEmailWithTimestamp, testPassword, 'Test User', '+91-9876543210');
      
      console.log('Registration successful:', result);
      setTestResult(`✅ Registration successful! User ID: ${result.uid}`);
      setAuthStatus(`User: ${result.email}`);
      
      // Refresh Firestore count
      const querySnapshot = await getDocs(collection(db, 'users'));
      setFirestoreStatus(`Connected (${querySnapshot.size} users found)`);
      
    } catch (error) {
      console.error('Actual registration test error:', error);
      setTestResult('❌ Registration failed: ' + (error as Error).message);
    }
  };

  return (
    <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-40 max-w-xs">
      <h3 className="font-semibold text-gray-800 mb-2">Firebase Status</h3>
      <div className="space-y-1 text-sm mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Firebase:</span>
          <span className={firebaseStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}>
            {firebaseStatus}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Auth:</span>
          <span className={authStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}>
            {authStatus}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Firestore:</span>
          <span className={firestoreStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}>
            {firestoreStatus}
          </span>
        </div>
      </div>
      
      <div className="border-t pt-2">
        <h4 className="font-medium text-gray-700 mb-2">Quick Test</h4>
        <div className="space-y-2 text-xs">
          <input
            type="email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            placeholder="Test email"
            className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
          />
          <input
            type="password"
            value={testPassword}
            onChange={(e) => setTestPassword(e.target.value)}
            placeholder="Test password"
            className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
          />
          <button
            onClick={testRegistration}
            className="w-full bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
          >
            Test Firebase Auth
          </button>
          <button
            onClick={testActualRegistration}
            className="w-full bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
          >
            Test Registration
          </button>
          {testResult && (
            <div className={`text-xs p-2 rounded ${testResult.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {testResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirebaseTest; 