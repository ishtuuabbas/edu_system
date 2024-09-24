import React from "react";
import "./VisionMissionValues.css";

const VisionMissionValues = () => {
  return (
    <>
      <div className="vmv-container">
        <div className="vmv-section">
          <div className="vmv-item">
            <h3 className="vmv-title green">Vision</h3>
            <h4 className="vmv-subtitle">Positive Change</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab
              error quis dolorum tempora quo quia quos! Harum, facere quod
              recusandae soluta, minus, maxime quae obcaecati sequi tenetur
              pariatur possimus.
            </p>
          </div>
          <div className="vmv-item">
            <h3 className="vmv-title orange">Mission</h3>
            <h4 className="vmv-subtitle">Education / Future</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
              magni laborum nam non commodi illum, dicta unde consequatur ipsum
              placeat quidem adipisci quae culpa, animi sint soluta error eum
              assumenda.
            </p>
          </div>
          <div className="vmv-item">
            <h3 className="vmv-title green">Values</h3>
            <ul className="vmv-list">
              <li>Sincerity</li>
              <li>Service</li>
              <li>Beauty</li>
              <li>Positive Conduct</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className='"vmv-container'>
    <div className="vmv-stats">
        <div className="vmv-stat-item">
          <div className="vmv-icon">⏳</div>
          <h4>Years</h4>
          <p>29</p>
        </div>
        <div className="vmv-stat-item">
          <div className="vmv-icon">🏫</div>
          <h4>School Units</h4>
          <p>1,921</p>
        </div>
        <div className="vmv-stat-item">
          <div className="vmv-icon">👩‍👩‍👧‍👦</div>
          <h4>Students</h4>
          <p>286,000</p>
        </div>
      </div>
      
    </div> */}
    </>
  );
};

export default VisionMissionValues;
