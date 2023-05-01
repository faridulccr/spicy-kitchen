import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
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
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // signUp function
    async function signUp(email, password, username, photoURL = "") {
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
    }

    // login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password); // return a promise
    }

    // logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth); // return a promise
    }

    const value = {
        currentUser,
        signUp,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
