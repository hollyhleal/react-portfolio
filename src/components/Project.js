import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { projects } from "../ProjectData";

function Project() {
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map(({ image, title, description, deployed, repo }) => (
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <Card.Body>
            <Button variant="primary" href={deployed} target="_blank">
              Deployed Application
            </Button>{" "}
            <Button variant="secondary" href={repo} target="_blank">
              Repository
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}

export default Project;
