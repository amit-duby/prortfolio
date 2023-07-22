import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="cont">
        <div className="left">
          <div className="home" style={{ color: "white" }}>
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            {/* <div> */}
            <p>123 HOUSE SOCITY.</p>
            <p>BANGLADESH.</p>
            {/* </div> */}
          </div>
          <div className="phone " style={{ color: "white" }}>
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2524-56-36
            </h4>
          </div>
          <div className="email" style={{ color: "white" }}>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right" style={{ color: "white" }}>
          <p>ABOUT THA COMPANY</p>

          <p>
            Address: Olympus A, Hiranandani Estate,<br></br> Ghodbunder Road,
            Patlipada, Thane West - 400607, Maharashtra.
          </p>
          <div className="icon">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
