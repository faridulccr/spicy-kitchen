import { NavLink } from "react-router-dom";
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
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive ? "active-route" : ""
                        }
                    >
                        Signup
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "active-route" : ""
                        }
                    >
                        Login
                    </NavLink>
                </>
            )}
        </div>
    );
};

export default Account;
