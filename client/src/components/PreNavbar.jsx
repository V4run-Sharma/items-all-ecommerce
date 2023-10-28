import React from "react";

const PreNavbar = () => {
  return (
    <div className="prenavbar bg-gray-200 font-semibold px-12 flex justify-between">
      <div className="infoContainer p-1">
        Free Shipping over orders of Rs. 499. 14 Day return and refund guarantee
      </div>
      <div className="impLinks p-1 flex space-x-14">
        <a>Sign In</a>
        <a>FAQs</a>
      </div>
    </div>
  );
};

export default PreNavbar;
