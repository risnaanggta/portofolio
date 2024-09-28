import "./AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>DESIGNER & DEVELOPER</h1>
        <p>
          Bachelor of Information Engineering with a specialization in Software Engineering from Satya Wacana Christian University. Passionate about web-based programming, particularly front-end development, with a keen interest in UI/UX.
          Demonstrates excellent collaboration and teamwork abilities, both individually and in group settings. Possesses strong communication skills and a continuous eagerness to learn and adapt.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="skill">
          <li>
            <h3>UI & UX</h3>
            <span class="bar">
              <span class="uiux"></span>
            </span>
          </li>
          <li>
            <h3>HTML & CSS</h3>
            <span class="bar">
              <span class="htmlcss"></span>
            </span>
          </li>
          <li>
            <h3>Java Script</h3>
            <span class="bar">
              <span class="js"></span>
            </span>
          </li>
          <li>
            <h3>PHP</h3>
            <span class="bar">
              <span class="php"></span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
