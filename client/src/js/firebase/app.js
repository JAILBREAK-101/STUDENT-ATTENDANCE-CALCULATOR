// Import the functions I need from the SDKs I need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* Authentication Database Setup */
const authenticationDbConfig = {
  apiKey: process.env.AUTH_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.AUTH_PROJECT_ID,
  storageBucket: process.env.AUTH_STORAGE_BUCKET,
  messagingSenderId: process.env.AUTH_MESSAGING_SENDER_ID,
  appId: process.env.AUTH_APP_ID,
  measurementId: process.env.AUTH_MEASUREMENT_ID,
};

// Initialize Firebase Auth-App
const authApp = initializeApp(authenticationDbConfig);
// Define Firebase Authentication Variable
const authentication = getAuth();

/* Records Database Setup */
const recordsDbConfig = {
  apiKey: process.env.RECORDS_API_KEY,
  authDomain: process.env.RECORDS_AUTH_DOMAIN,
  projectId: process.env.RECORDS_PROJECT_ID,
  storageBucket: process.env.RECORDS_STORAGE_BUCKET,
  messagingSenderId: process.env.RECORDS_MESSAGING_SENDER_ID,
  appId: process.env.RECORDS_APP_ID,
  measurementId: process.env.RECORDS_MEASUREMENT_ID,
};

// Initialize Firebase Records Database
const recordsApp = initializeApp(recordsDbConfig);

export { authApp, recordsApp, authentication };
