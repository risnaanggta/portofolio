import "./AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I am a final year student majoring in informatics engineering at Satya Wacana Christian University with a specialization in Software Engineering. I have a strong inclination towards web-based programming, especially focusing on
          front-end development, and I have a strong interest in UI/UX. I really enjoy col laborating and working with others, both individually and in groups. Additionally, I have excellent communication skills.
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
            <h3>HTML</h3>
            <span class="bar">
              <span class="html"></span>
            </span>
          </li>
          <li>
            <h3>CSS</h3>
            <span class="bar">
              <span class="css"></span>
            </span>
          </li>
          <li>
            <h3>Java Script</h3>
            <span class="bar">
              <span class="js"></span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
