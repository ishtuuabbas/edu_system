import React from "react";
import img from "../assets/logo.png"
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
    
      <div className="navbar-header">
      <div className="logo">
        <img src={img} width={80}></img>
        </div>

        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          {" "}
          <span className="sr-only">Toggle navigation</span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
          <span className="icon-bar"></span>{" "}
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          Education System
        </a>{" "}
        </div>
       
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
               <b>Home</b> 
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                <b>About</b>
              </a>
            </li>
           
            <li>
              <a href="#testimonials" className="page-scroll">
                <b>Success Story</b>
              </a>
            </li>
           
            <li>
              <a href="/Signup" className="page-scroll">
                <b>SignUp</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
