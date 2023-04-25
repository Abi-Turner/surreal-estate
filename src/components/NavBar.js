import "../styles/navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import logo from "../images/logo.png";

const NavBar = ({ onLogin, onLogout, userID }) => {
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="logo-icon" className="logo" />
        <h3 className="surreal-estate">Surreal Estate</h3>
      </div>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/properties">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add a Property
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/saved-properties">
            Saved Properties
          </Link>
        </li>
      </ul>
      <div className="facebook-login">
        {userID ? (
          <button
            type="submit"
            className="button-fb-signout"
            onClick={onLogout}
          >
            Sign Out
          </button>
        ) : (
          <FacebookLogin
            appId="188012377415038"
            callback={onLogin}
            icon="fa-facebook"
            autoLoad
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
