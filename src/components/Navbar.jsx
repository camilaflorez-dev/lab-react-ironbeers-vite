import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/home-icon.png";
import "../App.css";

function Navbar() {
  return (
    <>
      <Link to="/">
        <nav className="navbar">
          <div className="nav-container">
            <img className="home-icon" src={Home} alt="Home" />
          </div>
        </nav>
      </Link>
    </>
  );
}

export default Navbar;
