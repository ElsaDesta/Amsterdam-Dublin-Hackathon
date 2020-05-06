import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar--wrapper">
        <nav className="nav-wrapper container">
          <ul className="navbar--list">
            <li className={"navbar--list_item"}>
              <Link
                className={
                  window.scrollY > 100 ? "navbar--link1" : "navbar--link"
                }
                to="/"
              >
                SHOP
              </Link>
            </li>
            <li className="navbar--list_item">
              <Link
                className={
                  window.scrollY > 100 ? "navbar--link1" : "navbar--link"
                }
                to="/"
                to="/cart"
              >
                ABOUT
              </Link>
            </li>
            <li className="navbar--list_item">
              <Link
                className={
                  window.scrollY > 100 ? "navbar--link1" : "navbar--link"
                }
                to="/"
                to="/cart"
              >
                HIGHLIGHTS
              </Link>
            </li>
            <li className="navbar--list_item">
              <Link
                className={
                  window.scrollY > 100 ? "navbar--link1" : "navbar--link"
                }
                to="/"
                to="/cart"
              >
                CART
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;