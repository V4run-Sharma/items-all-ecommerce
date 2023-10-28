import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-black text-white flex items-center justify-between px-12 py-2">
        <img src={logo} alt="logo" className="w-[200px]" />
        <div className="links flex space-x-12 tracking-[0.15rem] text-[1rem]">
          <div>CATEGORIES</div>
          <div>BLOG</div>
          <div>CONTACT</div>
        </div>
        <div className="items flex space-x-8 tracking-[0.15rem] text-[1rem]">
          <div>WISHLIST</div>
          <div>CART</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
