import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="kk">
        <Link className="main-link" to="/">
          <img src={Logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="side-links">
        <Link className="link-login" to="/login">
          My Account
        </Link>
        <Link className="link-checkout" to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};
export default Nav;
