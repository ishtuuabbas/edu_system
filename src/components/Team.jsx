import React, { useState, useEffect } from "react";
import img1 from "../assets/std/1.png";
import img2 from "../assets/std/3.png";
import img3 from "../assets/std/2.png";
import img4 from "../assets/std/4.png";
import "./Team.css";

export const Team = () => {
  const stories = [
    {
      img: img1,
      title: "Student 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      img: img2,
      title: "Student 2",
      content: "Hic accusantium totam laudantium magnam veniam voluptate?",
    },
    {
      img: img3,
      title: "Student 3",
      content: "Sint, accusantium! Lorem ipsum dolor sit amet consectetur.",
    },
    {
      img: img4,
      title: "Student 4",
      content: "Accusantium totam laudantium magnam veniam voluptate?",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change story every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    const index = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>What Says Our Students</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quo quis maiores voluptate, minima incidunt provident
              ipsum! Voluptatibus nesciunt error odit vel molestiae delectus
              corrupti.
            </p>
          </div>
        </div>

        <div className="row story-container">
          <button className="chevron left" onClick={handlePrev}>
            &#10094;
          </button>

          <div className="std_2">
            <div className="col-md-4">
              <img src={stories[currentIndex].img} width={200} alt="" />
            </div>
            <div className="col-md-8 text-left">
              <h4>{stories[currentIndex].title}</h4>
              <p>{stories[currentIndex].content}</p>
            </div>
          </div>

          <button className="chevron right" onClick={handleNext}>
            &#10095;
          </button>
        </div>

        <div className="bubbles">
          {stories.map((_, index) => (
            <span
              key={index}
              className={`bubble ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
