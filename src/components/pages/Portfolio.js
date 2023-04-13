import React from "react";
import Project from "../Project";

function Portfolio() {
  return (
    <div>
      <h1>Check out some of my latest work...</h1>
      <div className="col">
        <div className="row">
          <Project />
          <Project />
          <Project />
        </div>
        <div className="row">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
