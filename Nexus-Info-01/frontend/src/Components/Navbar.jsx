import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" exact>
          Authentication
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active-link">
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
