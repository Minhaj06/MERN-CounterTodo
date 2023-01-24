import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <h3>My Todo</h3>
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item fs-4 ms-4">
            <NavLink className="nav-link text-white" to="/" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item fs-4 ms-4">
            <NavLink className="nav-link text-white" to="/counter">
              Counter
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
