import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container sticky top-0">
        <div className="prenavbar bg-gray-200 font-semibold px-12 flex justify-between">
          <div className="infoContainer p-1">
            Free Shipping.
            <span className="ml-2">14 Day return and refund guaranteed.</span>
          </div>
          <div className="impLinks p-1 flex space-x-14">
            <a>Sign In</a>
            <Link to="/Faq">FAQs</Link>
          </div>
        </div>
        <div className="navbar bg-black text-white flex items-center justify-between px-12 py-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[200px]" />
          </Link>
          <div className="impLinks flex space-x-12 tracking-[0.15rem] text-[1rem]">
            <Link to="/Categories">CATEGORIES</Link>
            <Link to="/Contact">CONTACT</Link>
            <Link to="/Wishlist">WISHLIST</Link>
            <Link to="/Cart">CART</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
