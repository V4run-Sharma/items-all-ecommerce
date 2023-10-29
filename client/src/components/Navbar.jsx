import React from "react";
import { Link, Route } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container sticky top-0 border-b-[1px] border-gray-300">
        <div className="prenavbar bg-gray-200 font-semibold px-12 flex justify-between">
          <div className="infoContainer p-1">
            Free Shipping.
            <span className="ml-2">14 Day return and refund guaranteed.</span>
          </div>
          <div className="impLinks p-1 flex space-x-[4.5rem]">
            <a>Sign In</a>
            <Link to="/Faq">FAQs</Link>
          </div>
        </div>

        <div className="navbar bg-black text-white flex items-center justify-between px-10 py-2 z-10">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[200px]" />
          </Link>
          <div className="impLinks w-fit px-2 flex justify-evenly space-x-12 tracking-[0.15rem] text-[1rem]">
            <Link
              className="transition-all hover:font-semibold hover:scale-110"
              to="/Categories"
            >
              CATEGORIES
            </Link>
            <Link
              className="transition-all hover:font-semibold hover:scale-110"
              to="/Contact"
            >
              CONTACT
            </Link>
            <Link
              className="transition-all hover:font-semibold hover:scale-110"
              to="/Wishlist"
            >
              WISHLIST
            </Link>
            <Link
              className="transition-all hover:font-semibold hover:scale-110"
              to="/Cart"
            >
              CART
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
