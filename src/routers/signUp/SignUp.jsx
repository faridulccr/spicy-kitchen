import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(); // for button disabled
    const [error, setError] = useState();
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const currentLocation = useLocation();

    //submit handler function
    async function submitHandler(e) {
        e.preventDefault();

        // password length checking
        if (password.length < 6) {
            return setError("Password should be at least 6 characters.");
        }
        //validation password
        if (password !== confirmPassword) {
            return setError("Password don't match with confirm password!");
        }

        try {
            setError(""); // clear existing error
            setLoading(true);
            await signUp(email, password, username, "photoURL");
            navigate(currentLocation.state?.from || "/");
        } catch (err) {
            console.log(err);
            console.log(err.message);
            setError("Failed to create an account!");
            setLoading(false);
        }
    }
    return <div>SignUp</div>;
};

export default SignUp;
