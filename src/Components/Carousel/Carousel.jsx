import React, { useState, useEffect } from "react";
import "./Carousel.css";

import { images } from "../../Data/companies";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 4) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="shadow-div"></div>
        <div className="shadow-div1"></div>
        {images
          .slice(currentIndex, currentIndex + 4)
          .map((image, index) => (
            <img key={index} src={image} alt="Carousel" className="carousel-image" />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
