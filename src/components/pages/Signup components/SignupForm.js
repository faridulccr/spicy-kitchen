import Form from "../Form";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContex";

const SignupForm = () => {
  const [username, setUsername] = useState("");// input er default value hisebe
  // empty string na dile console e error show kore
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(); // for checkbox
  const [loading, setLoading] = useState(); // for button disabled
  const [error, setError] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  //submit handler function
  async function submitHandler(e) {
    e.preventDefault();

    // password length checking
    if(password.length < 6){
      return setError("Password should be at least 6 characters.");
    }

    //validation password
    if (password !== confirmPassword) {
      return setError("Password don't match with confirm password!");
    }

    try {
      setError("");// clear existing error
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      console.log(err.message);
      setError("Failed to create an account!");
      setLoading(false);// for button active after error
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
        type="password"
        placeholder="Confirm password"
        iconName="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
