import React, { Component } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0">&copy; 2021 Company, Inc</p>

        <Link
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use to="#bootstrap" />
          </svg>
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-white">
              Home
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
