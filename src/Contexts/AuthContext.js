import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const Authentication = createContext();

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const fbProviedr = new FacebookAuthProvider();

const AuthContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const gitSignIn = () => {
        return signInWithPopup(auth, gitProvider);
    }
    const fbSignIn = () => {
        return signInWithPopup(auth, fbProviedr);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const setProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoader(false);
        })

        return () => unsubscribe;
    }, [])


    const authInfo = { user, loader, setLoader, setProfile, setUser, createUser, googleSignIn, gitSignIn, fbSignIn, logIn, resetPassword, emailVerify, logOut }
    return (
        <Authentication.Provider value={authInfo}>
            {children}
        </Authentication.Provider>
    );
};

export default AuthContext;