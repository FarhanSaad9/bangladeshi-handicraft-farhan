import React from "react";
import playstore from "../../../images/google.png";
import appstore from "../../../images/apple.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="leftFooter">
        <h4>DOWNLOAD MY APP</h4>
        <p>Download app for Android and IOS mobile phones</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>
      <div className="midFooter">
        <h1>
          Bangladeshi <br /> Handicraft
        </h1>
        <p>High quality is our first priority.</p>
        <p>Copyrights 2024 &copy; Design by Farhan & Irfan </p>
      </div>
      <div className="rightFooter">
        <h4>Follow me</h4>
        <a href="https://www.facebook.com/jack.farhan.16/">Facebook</a>
        <a href="https://www.instagram.com/jackfarhan9/">Instagram</a>
        <a href="https://github.com/FarhanSaad9">Git Hub</a>
      </div>
    </footer>
  );
};

export default Footer;
