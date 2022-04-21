import React, { useContext, useEffect, useState } from "react";
import "../firebase.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";

// export const AuthContext = React.createContext();
const AuthContext = React.createContext();

/* this is a standard pattern. AuthContext er value access
korar jonno bar bar useContext() hook jeno use krte na hoy tai
useAuth() name ekta custom hook create kore newa holo */
export const useAuth = () => {
    //for accessing context value in others file
    return useContext(AuthContext);//returns {currentUser, signup, login, logout}
};

//authectication provider func for adding value and return
export const AuthProvider = ({ children }) => {
    /* Amra jehetu firebase use korbo, so Amader kintu instantly
       login state ta available thakbe na, karon firebase sobsomy server
       theke request kore anbe. Tar mane majhkhane akta loading state
       thakbe. r setake maintain korar jonno useState() */
    const [loading, setLoading] = useState(true);

    /* Jodi kono user login/logout kore tar state k maintain korte */
    const [currentUser, setCurrentUser] = useState();

    // for authentication state change for login/logout
    useEffect(() => {
        const auth = getAuth(); //ekti authentication obj return kore
        // when change signin state then call the inner callback func
        const unsubsribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubsribe;
    }, []);

    // signup function
    async function signup(email, password, username) {
        /*authentication korar jonno proyjonioy auth ta peye jabo getAuth() call korle */
        const auth = getAuth();

        // signup and instantly login korar jonno built-in function
        await createUserWithEmailAndPassword(auth, email, password); // this is an asyncronous func

        // profile update er jonno
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        // for currentUser state change
        const updatedUser = auth.currentUser; //it's a object for users
        setCurrentUser({
            ...updatedUser,
        });
    }

    // login function
    function login(email, password) {
        const auth = getAuth();
        // signin/login korar jonno built-in function
        return signInWithEmailAndPassword(auth, email, password); // return a promise
    }

    // logout function
    function logout() {
        const auth = getAuth();
        // logout/signout function
        return signOut(auth); // return a promise
    }
    
    // all authentication value is here
    // console.dir(currentUser);
    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
