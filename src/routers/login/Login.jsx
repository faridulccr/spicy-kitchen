import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const Login = () => {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const { login } = useAuth();
    const navigate = useNavigate();
    const currentLocation = useLocation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate(currentLocation.state?.from || "/");
        } catch (err) {
            console.log(err);
            setError("Failed to Log in!");
            setLoading(false);
        }
    };
    return <div>Login</div>;
};

export default Login;
