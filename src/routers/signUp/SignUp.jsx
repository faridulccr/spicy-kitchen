import image from "../../assets/images/signup.svg";
import Illustration from "../../components/illustration/Illustration";
import SignupForm from "./SignupForm";

const Singup = () => {
    return (
        <div className="route-container">
            <h1 className="mt-4">Create an account</h1>
            <div className="column">
                <Illustration image={image} />
                <SignupForm />
            </div>
        </div>
    );
};

export default Singup;
