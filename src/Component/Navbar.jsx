import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Container">
      <nav>
        <ul>
          <li>
            <NavLink className="li-item" to="/customer">
              Customer
            </NavLink>
          </li>
          <li>
            <NavLink className="li-item" to="/">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className="li-item" to="/tranctions">
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink className="li-item" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
