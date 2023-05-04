import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "../firebase.config";

// export const AuthContext = React.createContext();
const AuthContext = React.createContext();

// this is a standard pattern for accessing context value
export const useAuth = () => {
    //for accessing context value in others file
    return useContext(AuthContext); //returns {currentUser, signUp, login, logout}
};

//authentication provider func for adding value and return
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    // for authentication state change for login/logout
    useEffect(() => {
        setLoading(true);
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // signUp function
    const signUp = async (email, password, username, photoURL) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // profile update
        await updateProfile(auth.currentUser, {
            displayName: username,
            photoURL,
        });

        // for currentUser state change
        const updatedUser = auth.currentUser;
        setCurrentUser({
            ...updatedUser,
        });
    };

    // login function
    const login = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password); // return a promise
    };

    // google signIn
    const googleSignIn = () => {
        const auth = getAuth();
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider);
    };

    // github signIn
    const githubSignIn = () => {
        const auth = getAuth();
        const GithubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, GithubProvider);
    };

    // logout function
    const logout = () => {
        const auth = getAuth();
        return signOut(auth); // return a promise
    };

    const value = {
        currentUser,
        signUp,
        login,
        googleSignIn,
        githubSignIn,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {loading && (
                <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                    {" "}
                    <Spinner />
                </div>
            )}
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
