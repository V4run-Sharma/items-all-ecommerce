import React from "react";

const Categories = () => {
  return (
    <div className="categories h-[calc(85vh+2px)] border-t-2 border-gray-300 bg-black text-white flex justify-evenly items-center -space-x-12">
      <div className="font-bold text-3xl border-2 rounded-2xl border-gray-300 py-8 px-12 hover:border-white  hover:scale-110 transition-all cursor-pointer">
        <h1>Budget Phones</h1>
        <h3 className="text-xl font-semibold pt-4 text-gray-300">
          Price Range: 10000 - 20000
        </h3>
      </div>
      <div className="font-bold text-3xl border-2 rounded-2xl border-gray-300 py-8 px-12 hover:border-white  hover:scale-110 transition-all cursor-pointer">
        <h1>Mid Range</h1>
        <h3 className="text-xl font-semibold pt-4 text-gray-300">
          Price Range: 20000 - 40000
        </h3>
      </div>
      <div className="font-bold text-3xl border-2 rounded-2xl border-gray-300 py-8 px-12 hover:border-white  hover:scale-110 transition-all cursor-pointer">
        <h1>Flagship</h1>
        <h3 className="text-xl font-semibold pt-4 text-gray-300">
          Price Range: 40000 - 100000
        </h3>
      </div>
    </div>
  );
};

export default Categories;
