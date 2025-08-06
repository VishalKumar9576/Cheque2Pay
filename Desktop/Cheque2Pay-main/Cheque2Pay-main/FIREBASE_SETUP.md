# Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication for the Cheque2Pay application.

## Prerequisites

1. Google Cloud Platform account
2. Firebase project (free tier available)

## Setup Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: "Cheque2Pay"
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable the following providers:
   - **Email/Password**: Enable
   - **Google**: Enable and configure
   - **Phone**: Enable (optional)

### 3. Configure Google Sign-In

1. In the "Sign-in method" tab, click on "Google"
2. Click "Enable"
3. Add your support email
4. Click "Save"

### 4. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" and select "Web"
4. Register app with name "Cheque2Pay Web"
5. Copy the Firebase config object

### 5. Configure Environment Variables

Create or update your `.env` file with the Firebase configuration:

```env
# Existing Gemini API key
VITE_GEMINI_API_KEY=AIzaSyDUm1G-LZmS6GwbQHsDIOOT_7X5DELFzJw

# Firebase Configuration (Your Project Details)
VITE_FIREBASE_API_KEY=AIzaSyB3Dg9DJYWJB1gO8HBwM8Ar1LA74YS9Zes
VITE_FIREBASE_AUTH_DOMAIN=cheque2pay.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=cheque2pay
VITE_FIREBASE_STORAGE_BUCKET=cheque2pay.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=881510222922
VITE_FIREBASE_APP_ID=1:881510222922:web:your-app-id
```

### 6. Enable Firestore Database

1. Go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

### 7. Set Up Security Rules

In Firestore Database > Rules, update the rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow authenticated users to read public data
    match /{document=**} {
      allow read: if request.auth != null;
    }
  }
}
```

## Features Implemented

### Authentication Methods
- ✅ **Email/Password**: Traditional sign-up and sign-in
- ✅ **Google Sign-In**: One-click authentication with Google
- ✅ **Password Reset**: Email-based password recovery
- ✅ **User Profile**: Display name, email, phone number

### Security Features
- ✅ **Email Verification**: Optional email verification
- ✅ **Password Strength**: Firebase enforces minimum requirements
- ✅ **Rate Limiting**: Built-in protection against brute force
- ✅ **Session Management**: Automatic session handling

### User Data Storage
- ✅ **Firestore Integration**: User profiles stored in Firestore
- ✅ **Real-time Updates**: Automatic data synchronization
- ✅ **Offline Support**: Works without internet connection

## Testing the Setup

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Authentication
1. Open the application in your browser
2. Click "Get Started" or "Login"
3. Try creating an account with email/password
4. Test Google sign-in
5. Test password reset functionality

### 3. Verify User Data
1. Check Firebase Console > Authentication > Users
2. Check Firestore Database > users collection
3. Verify user data is being stored correctly

## Common Issues and Solutions

### API Key Errors
- Ensure all environment variables are correctly set
- Check that the Firebase project is properly configured
- Verify the API key has the correct permissions

### Google Sign-In Issues
- Ensure Google provider is enabled in Firebase Console
- Check that the authorized domains include your development URL
- Verify the OAuth consent screen is configured

### Firestore Permission Errors
- Check that Firestore rules allow authenticated access
- Ensure the database is created and accessible
- Verify the user is properly authenticated

### Network Errors
- Check your internet connection
- Ensure Firebase services are available in your region
- Verify the project is not suspended

## Production Deployment

### 1. Update Security Rules
For production, use more restrictive rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Add more specific rules for your application
    match /cheques/{chequeId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
```

### 2. Enable Email Verification
1. Go to Authentication > Settings
2. Enable "Email verification"
3. Customize email templates

### 3. Set Up Custom Domain
1. Go to Authentication > Settings
2. Add your custom domain to authorized domains
3. Update environment variables with production URLs

### 4. Monitor Usage
1. Set up billing alerts in Google Cloud Console
2. Monitor authentication usage in Firebase Console
3. Set up error reporting and analytics

## Security Best Practices

1. **Never expose API keys** in client-side code
2. **Use environment variables** for all sensitive data
3. **Implement proper validation** on all user inputs
4. **Set up monitoring** for suspicious activities
5. **Regular security audits** of your rules and permissions
6. **Keep dependencies updated** to patch security vulnerabilities

## Support

For issues with:
- **Firebase Setup**: Check Firebase documentation
- **Authentication**: Review Firebase Auth guides
- **Firestore**: Consult Firestore documentation
- **Deployment**: Check your hosting platform's Firebase guides

## Next Steps

After setting up Firebase Authentication:

1. **Add Phone Authentication** (optional)
2. **Implement Email Verification**
3. **Add Social Login Providers** (Facebook, Twitter, etc.)
4. **Set Up User Roles and Permissions**
5. **Add Two-Factor Authentication**
6. **Implement Account Linking**

Your Firebase Authentication system is now ready to use! 🚀 