import React from "react";
import "./about.css"; // Import the CSS file

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <h2>About Us</h2>
          <div className="col-xs-12 col-md-6">
            <div className="image-container">
              <img src="img/about.jpg" className="img-responsive" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
