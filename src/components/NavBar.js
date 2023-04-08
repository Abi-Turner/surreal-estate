import "../styles/navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="logo-icon" />
      Surreal Estate
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
      </ul>
    </div>
  );
};

export default NavBar;
