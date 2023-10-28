import React from "react";
import Carousel1 from "../assets/carousel1.png";
import Carousel2 from "../assets/carousel2.png";
import Carousel3 from "../assets/carousel3.png";

const Hero = () => {
  return (
    <>
      <div className="carouselContainer bg-black min-h-[calc(85vh+1px)] border-t-2 flex flex-col">
        <div className="carouselImgAndBtns flex justify-center">
          <div className="leftBtn w-3 h-20 rounded-full  bg-white opacity-50 hover:opacity-100 transition-all mr-4 mt-[15.5rem]"></div>
          <div className="carouselImages space-y-3 flex flex-col w-fit ">
            <img src={Carousel1} alt="carousel1" className="h-[35rem]" />
            {/* <img src={Carousel2} alt="carousel2" className="h-[35rem]" />
            <img src={Carousel3} alt="carousel3" className="h-[35rem]" /> */}
          </div>
          <div className="leftBtn w-3 h-20 rounded-full  bg-white opacity-50 hover:opacity-100 transition-all ml-4 mt-[15.5rem]"></div>
        </div>
        <div className="carouselIndicators flex justify-center p-4 space-x-2">
          <div className="carouselIndicator w-3 h-3 rounded-full bg-white transition-all"></div>
          <div className="carouselIndicator w-3 h-3 rounded-full bg-white opacity-50 transition-all"></div>
          <div className="carouselIndicator w-3 h-3 rounded-full bg-white opacity-50 transition-all"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
