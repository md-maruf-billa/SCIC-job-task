import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';

// Create context
export const firebaseContext = createContext(null);

// Google auth provider
const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children } = {}) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    // Login with Google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Observer state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
            setLoading(false); 
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const userInfo = {
        currentUser, 
        loginWithGoogle, 
        loading
    };

    return (
        <firebaseContext.Provider value={userInfo}>
            {children}
        </firebaseContext.Provider>
    );
};

export default AuthContext;
