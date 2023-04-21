import "../styles/navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import logo from "../images/logo.png";

const NavBar = ({ onLogin, onLogout, userID }) => {
  const handleLogout = () => {
    window.FB.logout(() => {
      onLogout();
    });
  };

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
        {userID ? (
          <li className="navbar-links-item">
            <button className="item" type="button" onClick={handleLogout}>
              Sign Out
            </button>
          </li>
        ) : (
          <li className="navbar-links-item">
            <FacebookLogin
              className="facebook-login-btn"
              appId={188012377415038}
              fields="name,email,picture"
              callback={onLogin}
              icon="fa-facebook"
              render={(renderProps) => (
                <button
                  className="item"
                  type="button"
                  onClick={renderProps.onClick}
                >
                  Login with Facebook
                </button>
              )}
              onLogin={onLogin}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
