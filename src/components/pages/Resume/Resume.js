import "../Resume/Resume.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import resumePDF from "../../../documents/hl-react-portfolio-resume.pdf";

function Resume() {
  return (
    <>
      <div>
        <h3>Resume & Skills</h3>
      </div>
      <div className="mb-2">
        <Button bsPrefix="btn" size="lg" href={resumePDF} download="holly-leal-resume.pdf">
            Download my Resume (PDF)
        </Button>
      </div>
      <CardGroup>
        <Card>
          <Card.Header as="h5">Front-End</Card.Header>
          <Card.Body>
            <Card.Text>My front-end skills include...</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Back-End</Card.Header>
          <Card.Body>
            <Card.Text>My back-end skills include...</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header as="h5">Non-Technical</Card.Header>
          <Card.Body>
            <Card.Text>Other skills include...</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Resume;
