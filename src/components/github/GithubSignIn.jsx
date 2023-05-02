import React from "react";
import { useAuth } from "../../providers/AuthProvider";

const GithubSignIn = () => {
    const { githubSignIn } = useAuth();
    return <div>GithubSignIn</div>;
};

export default GithubSignIn;
