import "../components/Footer.css";
import React from "react";
import { FaDribbble, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <h4>Tegalrejo 5/4 Argomulyo, Salatiga</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <a a href="https://wa.me/6285602963866">
                <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 0856-0296-3866
              </a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <a a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=risnaanggta@gmail.com">
                <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> risnaanggta@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>Bachelor of Informatics Engineering</p>
          <div className="social">
            <a href="https://www.instagram.com/risnaanggta/">
              <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/risnaanggta/">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://dribbble.com/risnaanggta">
              <FaDribbble size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/risnaanggta">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://id.pinterest.com/risnaanggta/">
              <FaPinterest size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
