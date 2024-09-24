import React, { useState, useEffect } from "react";
import "./SuccessStories.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const successData = [
  {
    name: "Rushna Iqbal",
    title: "Alumni – Institute of Business Administration (IBA)",
    story: "In the second year of my bachelor's, my father's eye surgery placed our family in a financial constraint...",
  },
  {
    name: "Test Iqbal",
    title: "Alumni – Institute of Business Administration (IBA)",
    story: "In the second year of my bachelor's, my father's eye surgery placed our family in a financial constraint...",
  },
  {
    name: "Teef Iqbal",
    title: "Alumni – Institute of Business Administration (IBA)",
    story: "In the second year of my bachelor's, my father's eye surgery placed our family in a financial constraint...",
  },
  {
    name: "Anum Iqbal",
    title: "Alumni – Institute of Business Administration (IBA)",
    story: "In the second year of my bachelor's, my father's eye surgery placed our family in a financial constraint...",
  },
  {
    name: "Saad Iqbal",
    title: "Alumni – Institute of Business Administration (IBA)",
    story: "In the second year of my bachelor's, my father's eye surgery placed our family in a financial constraint...",
  },
  {
    name: "Zara Iqbal",
    title: "Alumni – Institute of Business Administration (IBA)",
    story: "In the second year of my bachelor's, my father's eye surgery placed our family in a financial constraint...",
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalGroups = Math.ceil(successData.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
    );
  };

  const startIndex = currentIndex * 3;
  const visibleStories = successData.slice(startIndex, startIndex + 3);

  return (
    <>
    <div id="testimonials">
    <div className="success-stories-container">
      <h2>Our Success Stories</h2>
      <div className="story-wrapper">
        <FaChevronLeft className="chevron left" onClick={handlePrev} />
        <div className="story-group">
          {visibleStories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="avatar">
              </div>
              <h3>{story.name}</h3>
              <h4>{story.title}</h4>
              <p>{story.story}</p>
             <a href="/SuccessStory" className="btn btn-custom btn-lg page-scroll">
                   Learn More
                 </a>
                 
            </div>
            
          ))}
          
        </div>
        <FaChevronRight className="chevron right" onClick={handleNext} />
      </div>
      <div className="bubbles">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <span
            key={index}
            className={`bubble ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
   
     {/* <div className="read-more text-center">
    <a href="/SuccessStory" className="btn btn-custom btn-lg page-scroll">
          Learn More
        </a>
        </div> */}
        
    </div>
    </div>
    </>
  );
};

export default SuccessStories;
