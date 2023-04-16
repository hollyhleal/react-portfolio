import React from "react";
import hollylealphoto from "../../../images/hollylealphoto.jpeg";
import Image from "react-bootstrap/Image";
import "./About.css";

function About() {
  return (
    <div>
      <Image
        roundedCircle
        className="profileImage"
        src={hollylealphoto}
        alt="Holly Leal profile"
      />
      <h2 class="animate__animated animate__lightSpeedInRight">Welcome!</h2>
      <p>
        My name is Holly Leal and I am approaching graduation in the University
        of Denver's Full-Stack Coding Boot Camp. I live in Lakewood, Colorado
        and enjoy hiking, skiing and traveling to new places.
      </p>
    </div>
  );
}

export default About;
