import React from "react";
import "./about.css";
import { Typography, Button, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/jackfarhan9/";
  };
  return (
    <div className="aboutSection">
      <MetaData title={"About"} />
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="./images/IMG_20211120_102551.jpg"
              alt="Founder"
            />
            <Typography>Farhan Shahriar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a simple E-commerce wesbite named Bangladeshi Handicraft.
              made by Farhan Shahriar and Md Irfan Faisal Only with the purpose
              to learn MERN Stack and implement it.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Meet me</Typography>
            <a href="https://github.com/FarhanSaad9" target="blank">
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://wa.link/gzux9h" target="blank">
              <WhatsAppIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
