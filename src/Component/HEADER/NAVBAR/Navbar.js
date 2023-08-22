import React from "react";
import { Tb360View } from "react-icons/tb";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Main-Navbar">
      <div className="logo">
        <Tb360View />
      </div>
      <div className="first-Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <a href=''>Home</a> */}
        {/* <a href=''>About</a>
            <a href=''>ProductList</a>
            <a href=''>Contact</a>
            <a href=''>SinglePage</a> */}
        <a href="">
          <PiShoppingCart />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
