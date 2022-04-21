import Account from "./Account";
import image from "../assets/images/logo-bg.png";
import Classes from "../assets/styles/Nav.module.css";
import {Link} from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <Link to="/" className={Classes.brand}>
              <img src={image} alt="Learn With Faridul Logo" />
              <h3>Learn With Faridul</h3>
            </Link>
          </li>
        </ul>

        <Account />
      </nav>
    </header>
  );
};

export default Nav;
