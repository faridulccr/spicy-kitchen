import React from "react";
import Account from "./Account";
import ActiveRoute from "./ActiveRoute";
import "./Header.style.scss";

const Header = () => {
    return (
        <header>
            <h1 className="brand">Spicy Kitchen</h1>
            <nav className="nav">
                <ul>
                    <li>
                        <ActiveRoute to="/">Home</ActiveRoute>
                    </li>
                    <li>
                        <ActiveRoute to="/blog">Blog</ActiveRoute>
                    </li>
                </ul>
                <Account />
            </nav>
        </header>
    );
};

export default Header;
