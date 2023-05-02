import React from "react";
import { useAuth } from "../../providers/AuthProvider";

const GoogleSignIn = () => {
    const { googleSignIn } = useAuth();
    return <div>GoogleSignIn</div>;
};

export default GoogleSignIn;
