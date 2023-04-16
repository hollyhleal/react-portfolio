import "../Resume/Resume.css";
import Button from "react-bootstrap/Button";
import resumePDF from "../../../documents/hl-react-portfolio-resume.pdf";

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
              HTML5, CSS, JavaScript, JQuery, JSON, ES6, Bootstrap, AJAX
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Back-End Skills</h5>
            <p class="card-text">
              MySQL, MongoDB, Express, React, Node, Handlebars, Sequelize, NoSQL
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Full-Stack & Non-Technical Skills</h5>
            <p class="card-text">
              Agile, Kanban, Git Flow, Document Object Model (DOM), API
              Integrations, Object-Oriented Programming, Testing, ProWorkFlow,
              Jira, MERN Stack, Wireframes, Entity-Relationship Diagrams
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
