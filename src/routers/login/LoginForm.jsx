import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import TextInput from "../../components/text-input/TextInput";
import { useAuth } from "../../providers/AuthProvider";
import "./LoginForm.style.scss";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState();
    const [emailLoading, setEmailLoading] = useState();
    const [error, setError] = useState();
    const { login, googleSignIn, githubSignIn } = useAuth();
    const navigate = useNavigate();
    const currentLocation = useLocation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            setEmailLoading(true);
            await login(email, password);
            navigate(currentLocation.state?.from || "/");
        } catch (err) {
            console.log(err);
            setError("Your email or password doesn't match!");
            setLoading(false);
            setEmailLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            setError("");
            setLoading(true);
            await googleSignIn();
            navigate(currentLocation.state?.from || "/");
        } catch (err) {
            console.log(err);
        }
    };

    const handleGithubSignIn = async () => {
        try {
            setError("");
            setLoading(true);
            await githubSignIn();
            navigate(currentLocation.state?.from || "/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {emailLoading && (
                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <Spinner />
                </div>
            )}
            {!emailLoading && (
                <Form
                    action="#"
                    style={{ height: "350px" }}
                    onSubmit={submitHandler}
                >
                    <TextInput
                        type="email"
                        placeholder="Enter email"
                        iconName="alternate_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextInput
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        iconName="lock"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p
                        className="show-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide password" : "Show password"}
                    </p>
                    <Button type="submit" disabled={emailLoading}>
                        <span>Log In</span>
                    </Button>

                    {error && <p className="error">{error}</p>}

                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link>{" "}
                        instead.
                    </div>
                </Form>
            )}

            <div className="alt-login-btn-container">
                <button
                    onClick={handleGoogleSignIn}
                    className="alt-login-btn"
                    disabled={loading}
                >
                    sign in with Google
                </button>
                <button
                    onClick={handleGithubSignIn}
                    className="alt-login-btn"
                    disabled={loading}
                >
                    sign in with Github
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
