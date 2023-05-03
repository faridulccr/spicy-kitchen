import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import "./Account.style.scss";

const Account = () => {
    const { currentUser, logout } = useAuth();
    // console.log(currentUser);

    return (
        <div className="account">
            {currentUser ? (
                <>
                    <img
                        className="account-logo"
                        src={currentUser.photoURL}
                        title={currentUser.displayName}
                    />
                    <span
                        className="material-icons-outlined"
                        onClick={logout}
                        title="Logout"
                    >
                        logout
                    </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
};

export default Account;
