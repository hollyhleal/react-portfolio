import Card from "react-bootstrap/Card";
import { projects } from "../ProjectData";

function Project() {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12">
      {projects.map(({ image, title, description, deployed, repo, id }) => (
        <Card className="mb-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Link href={deployed} target="_blank">
              Deployed Application
            </Card.Link>
            <Card.Link href={repo} target="_blank">
              Repository
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Project;
