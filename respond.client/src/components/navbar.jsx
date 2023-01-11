import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          {!user && (
            <>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink className="nav-item nav-link" to="/user">
                My Account
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Log Out
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
