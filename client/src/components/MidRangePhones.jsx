import React from "react";
import Phones from "../constants/PhonesList";

const MidRangePhones = () => {
  return (
    <div className="bg-black min-h-[calc(85vh+1px)] flex flex-wrap p-16">
      {Phones.filter((phone) => phone.category === "mid-range").map((phone) => (
        <div
          key={phone.id}
          className="phonecard max-h-80 text-white border-2 flex rounded-2xl border-gray-300 p-6 space-x-6 hover:scale-110 hover:border-white transition-all mr-16 mb-16"
        >
          <div className="tempImg border-2 rounded-2xl border-gray-300 px-16 py-32"></div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold">{phone.name}</h1>
              <h2 className="text-lg">{phone.company}</h2>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Rs. {phone.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MidRangePhones;
