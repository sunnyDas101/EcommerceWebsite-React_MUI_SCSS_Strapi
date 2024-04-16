import React from "react";
import "./Footer.scss";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to EcomEase – Your tech destination! Discover top-quality
            electronics, gadgets, and accessories curated for your digital
            lifestyle. Shop confidently for the latest tech trends. Simplify
            your online shopping at EcomEase.
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Panjabari Rd, Kamrup Metro, Guwahati, Assam, India,
              781028
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 9127-357-304</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@ecomease.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            ECOMEASESTORE 2023 CREATED BY SUNNY PREMIUM E-COMMERCE SOLUTIONS.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
