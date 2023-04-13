import React from "react";
import hollylealphoto from "../../images/hollylealphoto.jpeg";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <div>
      <Image
        roundedCircle
        className="profileImage"
        src={hollylealphoto}
        alt="Holly Leal profile"
      />
      <p>
        Welcome! My name is Holly Leal and I am approaching graduation in the
        University of Denver's Full-Stack Coding Boot Camp. I live in Lakewood,
        Colorado and enjoy hiking, skiing and traveling to new places.
      </p>
    </div>
  );
}

export default About;
