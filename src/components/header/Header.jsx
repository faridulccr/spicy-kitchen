import React from "react";
import { Link, NavLink } from "react-router-dom";
import Account from "./Account";
import "./Header.style.scss";

const Header = () => {
    return (
        <header>
            <Link to="/" className="brand">
                Spicy Kitchen
            </Link>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-route" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "active-route" : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <Account />
            </nav>
        </header>
    );
};

export default Header;
