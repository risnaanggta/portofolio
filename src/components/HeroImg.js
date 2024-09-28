import "./HeroImg.css";
import React from "react";
import { Link } from "react-router-dom";
import IntroImg from "../assets/risna.JPEG";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I AM BACHELOR INFORMATICS ENGINEERING</p>
        <h1>FRONTEND DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
