import "../Resume/Resume.css";
import Button from "react-bootstrap/Button";
import resumePDF from "../../../documents/Holly Leal Software Developer Resume.pdf";

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
              HTML5, CSS, Javascript ES6, JQuery, JSON, Bootstrap, AJAX,
              Document Object Model
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Back-End Skills</h5>
            <p class="card-text">
              MySQL, MongoDB, Express, React, Node, Handlebars, Sequelize,
              NoSQL, API Integrations, MERN Stack, Object-Oriented Programming
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tools & Planning</h5>
            <p class="card-text">
              Agile Methodology, Kanban, User Stories, Wireframes,
              Entity-Relationship Diagrams, Git, Testing, ProWorkFlow, Jira,
              Heroku
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
