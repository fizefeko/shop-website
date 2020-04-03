import React from "react";

import { Link } from "react-router-dom";

import "./header.component.css";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            src="https://images.squarespace-cdn.com/content/v1/56c775ad27d4bd3fdb24775d/1519067155901-OKFUUA9DU12JTGZ4KSU8/ke17ZwdGBToddI8pDm48kDM9K2YVWke7i6qyOZAoP55Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx6D66e60N4NH7-6c-GS1jKxs7fV43ip-j_qYsyLxlaZBtjGQiyL5M8H7JCrxTyoxc/dummy+logo.jpg"
            className="logo"
            alt="logo"
          />
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item " activeClassName="active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" activeClassName="active">
              <Link
                className="nav-link"
                to="/products"
                activeClassName="active"
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
