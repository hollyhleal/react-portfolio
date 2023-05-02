import "../Resume/Resume.css";
import Button from "react-bootstrap/Button";
import resumePDF from "../../../documents/Holly Leal Full Stack Resume.pdf";

function Resume() {
  return (
    <>
      <div>
        <h3>Resume & Skills</h3>
      </div>
      <div className="mb-2">
        <Button
          bsPrefix="btn"
          size="lg"
          href={resumePDF}
          download="holly-leal-resume.pdf"
        >
          Download my Resume (PDF)
        </Button>
      </div>
      <div class="card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Front-End Skills</h5>
            <p class="card-text">
              React, Typescript, HTML5, CSS, Javascript ES6, GraphQL
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Back-End Skills</h5>
            <p class="card-text">MySQL, MongoDB, Express, Sequelize</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tools & Planning</h5>
            <p class="card-text">
              Git, Figma, Jira, Kanban, Agile Methodology, User Stories,
              Wireframes, Heroku
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
