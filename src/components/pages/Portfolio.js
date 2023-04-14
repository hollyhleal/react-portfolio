import React from "react";
import Project from "../Project";

function Portfolio() {
  return (
    <div className="container">
      <h1>Check out some of my latest work...</h1>
      <div className="row justify-content-between">
        <Project />
      </div>
    </div>
  );
}

export default Portfolio;
