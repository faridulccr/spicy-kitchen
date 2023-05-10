import image from "../../assets/images/login.svg";
import Illustration from "../../components/illustration/Illustration";
import useTitle from "../../hooks/useTitle";
import LoginForm from "./LoginForm";

const Login = () => {
    useTitle("Login");
    return (
        <div className="route-container">
            <h1 className="mt-4">Login to your account</h1>
            <div className="column">
                <Illustration image={image} />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
