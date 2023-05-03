import React from "react";
import { Link } from "react-router-dom";
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
                        <Link to="/" className="menu">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="menu">
                            Blog
                        </Link>
                    </li>
                </ul>
                <Account />
            </nav>
        </header>
    );
};

export default Header;
