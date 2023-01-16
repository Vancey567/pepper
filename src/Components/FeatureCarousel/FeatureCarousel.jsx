import React, { useState, useEffect } from "react";
import "./FeatureCarousel.css";

import { features } from "../../Data/featuresCarousel";

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === features.length - 5) {
        setCurrentIndex(features.length);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="feature-carousel-container">
      <div className="carousel">
        {features
          .slice(currentIndex, currentIndex + 5)
          .map((feature, index) => (
            <div className="single-carousel" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                <div className=""><img src="/images/purple-div.png" alt="purple" /></div>
                <div className="">{feature}</div>
            </div>
          ))}
      </div>
      <div className="carousel bottom-carousel">
        {features
          .slice(currentIndex, currentIndex + 5)
          .map((feature, index) => (
            <div className="single-carousel" style={{ transform: `translateX(-${currentIndex * 90}%)`}}>
                <span className=""><img src="/images/green-div.png" alt="purple" /></span>
                <span className="">{feature}</span>
            </div>
            
          ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
