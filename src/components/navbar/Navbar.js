import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/" className="navitem">
        Home
      </Link>
      <Link to="/services" className="navitem">
        Services
      </Link>

      <Link to="/pricing" className="navitem">
        Pricing
      </Link>

      <Link to="/contact-us" className="navitem">
        Contact Us
      </Link>

      <div className="dropdown navitem">
        <button className="dropbtn">
          Gallery
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/photos">Photos</Link>
          <Link to="/videos">Videos</Link>
        </div>
      </div>

      <Link to="#" className="icon" onClick={myFunction}>
        &#9776;
      </Link>
    </div>
  );
}

export default Navbar;
