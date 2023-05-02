import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import Form from "../../components/form/Form";
import TextInput from "../../components/text-input/TextInput";
import { useAuth } from "../../providers/AuthProvider";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [agree, setAgree] = useState();
    const [loading, setLoading] = useState();
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

        try {
            setError(""); // clear existing error
            setLoading(true);
            await signUp(email, password, username, photoURL);
            navigate(currentLocation.state?.from || "/");
        } catch (err) {
            console.log(err);
            console.log(err.message);
            setError("Failed to create an account!");
            setLoading(false);
        }
    }

    return (
        <Form action="#" style={{ height: "500px" }} onSubmit={submitHandler}>
            <TextInput
                type="text"
                placeholder="Enter name"
                iconName="person"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
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
            <TextInput
                type="text"
                placeholder="Enter photo url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                required
            />
            <Checkbox
                text="I agree to the Terms &amp; Conditions"
                value={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
            />
            <Button type="submit" disabled={loading}>
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
};

export default SignupForm;
