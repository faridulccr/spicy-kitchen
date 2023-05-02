import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import TextInput from "../../components/text-input/TextInput";
import { useAuth } from "../../providers/AuthProvider";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    return (
        <Form action="#" style={{ height: "330px" }} onSubmit={submitHandler}>
            <TextInput
                type="email"
                placeholder="Enter email"
                iconName="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                iconName="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button type="submit" disabled={loading}>
                <span>Log In</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
            <div className="alt-login-btn-container">
                <button className="alt-login-btn">
                    Use your google account
                </button>
                <button className="alt-login-btn">
                    Use your github account
                </button>
            </div>
        </Form>
    );
};

export default LoginForm;
