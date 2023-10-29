import { useState, useEffect } from "react";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";
import Carousel3 from "../assets/Carousel3.png";

const images = [Carousel1, Carousel2, Carousel3];

const Hero = () => {
  // Use useState to keep track of the current index of the image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide, modulus to loop back to the first image if at the end
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Use useEffect to set an interval to go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    // Return a function from the effect that clears the interval
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]); // Re-run the effect when the currentIndex changes

  return (
    <div className="carouselContainer bg-black min-h-[calc(85vh+1px)] border-t-2 border-gray-300 flex flex-col">
      <div className="carouselImgAndBtns flex justify-center">
        <div
          className="leftBtn w-3 h-20 rounded-full bg-white opacity-50 hover:opacity-100 transition-all mr-4 mt-[15.5rem] cursor-pointer"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          } // Use modulus to loop back to the last image if at the first
        ></div>

        {images.map((image, index) => (
          // Use the index to show the image if the index matches the currentIndex
          <img
            key={index}
            src={image}
            alt={`carousel${index + 1}`}
            className={`carouselImage h-[35rem] ${
              index === currentIndex ? "" : "hidden"
            }`}
          />
        ))}

        <div
          className="righttn w-3 h-20 rounded-full bg-white opacity-50 hover:opacity-100 transition-all ml-4 mt-[15.5rem] cursor-pointer"
          onClick={nextSlide} // Call the nextSlide function to go to the next image
        ></div>
      </div>

      <div className="carouselIndicators flex justify-center z-10 -mt-6 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carouselIndicator cursor-pointer w-3 h-3 rounded-full bg-black transition-all ${
              index === currentIndex
                ? ""
                : "opacity-20 hover:bg-black hover:opacity-50"
            }`} // Use opacity to show the current index
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
