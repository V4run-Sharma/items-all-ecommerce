import React from "react";
import { BiCopy } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("onlyphones@gmail.com");
  };
  const copyPhn = () => {
    navigator.clipboard.writeText("+91 989 984 9898");
  };
  const copyAdd = () => {
    navigator.clipboard.writeText("Saheliyon ki bari, Udaipur, Rajasthan");
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
      <div className="contactContainer bg-black text-white min-h-[calc(85vh+1px)] flex items-center justify-around">
        <div className="headingText pl-36 pb-8 flex flex-col">
          <div className="contact text-7xl font-bold ">Contact Us.</div>
          <div className="faq text-2xl pt-20 pl-2">
            Have any questions? Read{" "}
            <Link to="/faq">
              <strong className="tracking-widest">FAQs</strong>
            </Link>
          </div>
        </div>

        <div className="infoText pr-36">
          <div className="text-4xl font-semibold">Email:</div>
          <div className="email text-xl pt-1 pb-4 flex items-center tracking-[0.05rem]">
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

          <div className="text-4xl font-semibold">Phone:</div>
          <div className="phnno text-xl pt-1 pb-4 flex items-center tracking-[0.05rem]">
            +91 989 984 9898
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

          <div className="text-4xl font-semibold">Address:</div>
          <div className="address text-xl pt-1 pb-4 flex items-center tracking-[0.05rem]">
            Saheliyon ki bari, Udaipur, Rajasthan
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
