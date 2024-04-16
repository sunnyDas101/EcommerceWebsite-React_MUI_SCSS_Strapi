import React from "react";
import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>

          <p>
            Your One-Stop Shop for Cutting-Edge Tech Products! Explore our
            curated selection of the latest and greatest in technology. From
            gadgets to gear, we've got your tech needs covered!
          </p>

          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>

        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
