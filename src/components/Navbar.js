import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// MUI stuff
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="page">
        <div className="header">
          <NavLink
            to="/"
            exact
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/stories"
            exact
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            Stories
          </NavLink>
          <NavLink
            to="/signup"
            exact
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            Sign up
          </NavLink>
          <NavLink
            to="/about"
            exact
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            About us
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
