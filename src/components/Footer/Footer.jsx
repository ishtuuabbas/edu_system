import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import img from "../../assets/logo.png";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer position-relative">
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="copyright">
            <div className="row">
              <div class="col-lg-4 col-md-6 footer-about">
                <div className="footer-logo">
                  <img src={img} width={60} alt="logo" />
                </div>

                <span class="sitename text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  nisi sint esse maiores vel deserunt, neque minus sapiente
                  voluptate perferendis, tempora accusamus cupiditate! Harum
                  aperiam ratione cum sequi quam animi.
                </span>
              </div>

              {/*  */}
              <div class="col-lg-3 col-md-3">
                <div className="copyright-menu">
                  <h4>
                    <b>Useful Links</b>
                  </h4>
                  <ul>
                    <li>
                      <a href="#" className="text-black">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="text-black">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials" className="text-black">
                        Stories
                      </a>
                    </li>
                    
                    <li>
                      <Link to={"/"} className="text-black">
                        Privacy policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-2 col-md-3">
                <div className="copyright-menu">
                  <h4>
                    <b>Our Services</b>
                  </h4>
                  <ul>
                    <li>
                      <Link to={"/"} className="text-black">
                       Lorem, ipsum dolor
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="text-black">
                      Lorem, ipsum dolor
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="text-black">
                      Lorem, ipsum dolor
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="text-black">
                      Lorem, ipsum dolor
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="text-black">
                      Lorem, ipsum dolor
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="copyright-menu">
                  <h4>
                    <b>Follow Us</b>
                  </h4>

                  <ul className="IS-Icon">
                    <li className="Social-Icon">
                      <a
                        href="https://www.linkedin.com/company/anchan-technologies"
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li className="Social-Icon">
                      <a
                        href="https://anchantech.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="Facebook"
                      >
                        <FaFacebookSquare />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://web.whatsapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="whatsapp"
                      >
                        <FaWhatsappSquare />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="Github"
                      >
                        <FaGithubSquare />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="instagram"
                      >
                        <FaInstagramSquare />
                      </a>
                    </li>
                  </ul>
                  <div className="IS-cont">
                    <div className="IS">
                      <FaEnvelope className="icon" />
                    </div>
                    <div className="IS">
                      <p><b>Email: </b>contacts@anchantech.com</p>
                      
                    </div>
                  </div>

                  <div className="IS-cont">
                    <div className="IS">
                      <FaPhoneAlt className="icon" />
                    </div>
                    <div className="IS">
                      
                      <p><b>Call: </b>+0123-435346257</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
    <div id="footer">
    <div className="text-center">
      <marquee behavior="" direction="">
        <p>
          &copy; 2024 Design by{" "}
          <a href="https://anchantech.com/" rel="nofollow">
            Anchan Technology
          </a>
        </p>
      </marquee>
    </div>
  </div>
  </>
  );
};

export default Footer;
