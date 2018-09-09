import React from "react";
import logo from "./logo1.png";

const Nav = () => (

  <nav className="navbar navbar-dark">
    <a className="navbar-brand" href="/">
    <img className="logo"src={logo} alt="logo"/>
    </a>
    <a className="navbar-brand" href="/Login">
      Login
    </a>
  </nav>
);

export default Nav;