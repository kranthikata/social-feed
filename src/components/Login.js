import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Zy_baTH2ngW1tGV5BPI0F3D5zH1Nv_A",
  authDomain: "social-feed-22854.firebaseapp.com",
  projectId: "social-feed-22854",
  storageBucket: "social-feed-22854.appspot.com",
  messagingSenderId: "486831930426",
  appId: "1:486831930426:web:dddf36925488b5eb440903",
  measurementId: "G-866DWXXGBH",
};

// Initialize Firebase (ensure this is initialized only once in your app)
initializeApp(firebaseConfig);

const Login = ({ setUser }) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Update the user state after login
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Error during Google login:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Vibesnap
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          Moments That Matter, Shared Forever.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center gap-3 transition-all duration-300"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Logo"
            className="w-6 h-6"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
