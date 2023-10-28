import React from "react";
import { BiCopy } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("onlyphones@gmail.com");
  };
  const copyPhn = () => {
    navigator.clipboard.writeText("+1 123 456 7890");
  };
  const copyAdd = () => {
    navigator.clipboard.writeText("1234 Main St, New York, NY 10001");
  };
  const alertCopy1 = () => {
    const alert = document.querySelector(".p1");
    alert.classList.remove("opacity-0");
    setTimeout(() => {
      alert.classList.add("opacity-0");
    }, 1000);
  };
  const alertCopy2 = () => {
    const alert = document.querySelector(".p2");
    alert.classList.remove("opacity-0");
    setTimeout(() => {
      alert.classList.add("opacity-0");
    }, 1000);
  };
  const alertCopy3 = () => {
    const alert = document.querySelector(".p3");
    alert.classList.remove("opacity-0");
    setTimeout(() => {
      alert.classList.add("opacity-0");
    }, 1000);
  };

  return (
    <>
      <div className="contactContainer bg-black text-white border-t-2 border-gray-300 min-h-[calc(85vh+1px)] flex items-center justify-around">
        <div className="headingText pl-36 pb-8 flex flex-col">
          <div className="contact text-7xl font-bold ">Contact Us.</div>
          <div className="faq text-2xl pt-20 pl-2">
            Have any questions? Read{" "}
            <Link to="/faq">
              <strong>FAQs</strong>
            </Link>
          </div>
        </div>

        <div className="infoText pr-36">
          <div className="text-4xl font-bold">Email:</div>
          <div className="email text-xl pt-1 pb-4 flex items-center">
            onlyphones@gmail.com
            <div className="pl-4 cursor-pointer">
              <BiCopy
                onClick={() => {
                  copyEmail();
                  alertCopy1();
                }}
              />
            </div>
            <p className="p1 pl-4 text-gray-500 opacity-0">Copied</p>
          </div>

          <div className="text-4xl font-bold">Phone:</div>
          <div className="phnno text-xl pt-1 pb-4 flex items-center">
            +1 123 456 7890
            <div className="pl-4 cursor-pointer">
              <BiCopy
                onClick={() => {
                  copyPhn();
                  alertCopy2();
                }}
              />
            </div>
            <p className="p2 pl-4 text-gray-500 opacity-0">Copied</p>
          </div>

          <div className="text-4xl font-bold">Address:</div>
          <div className="address text-xl pt-1 pb-4 flex items-center">
            1234 Main St, New York, NY 10001
            <div className="pl-4 cursor-pointer">
              <BiCopy
                onClick={() => {
                  copyAdd();
                  alertCopy3();
                }}
              />
            </div>
            <p className="p3 pl-4 text-gray-500 opacity-0">Copied</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
