import React, { useState, useEffect } from "react";
import img1 from "../assets/education-day-assortment-with-copy-space.jpg";
import img2 from "../assets/edubg1.jpg";
import img3 from "../assets/edubg2.jpg";

export const Header = (props) => {
  // Array of background images
  const images = [img1, img2, img3];

  // State to keep track of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  
  const handleLeftScroll = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightScroll = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>

                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <button className="chevron chevron-left" onClick={handleLeftScroll}>
        &#10094;
      </button>
      <button className="chevron chevron-right" onClick={handleRightScroll}>
        &#10095;
      </button>
    </header>
  );
};
