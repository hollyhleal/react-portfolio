// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
import { projects } from "../ProjectData";

function Project() {
  return (
    <div class="row row-cols-1 row-cols-md-3">
      {projects.map(({ image, title, description, deployed, repo }) => (
        // <Card>
        //   <Card.Img variant="top" src={image} />
        //   <Card.Body>
        //     <Card.Title>{title}</Card.Title>
        //     <Card.Text>{description}</Card.Text>
        //   </Card.Body>

        //   <Card.Body>
        //     <Button variant="primary" href={deployed} target="_blank">
        //       Deployed Application
        //     </Button>
        //     {"   "}
        //     <Button variant="secondary" href={repo} target="_blank">
        //       Repository
        //     </Button>
        //   </Card.Body>
        // </Card>
        <div class="col mb-4">
          <div class="card h-100">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <button
                type="button"
                className="btn"
                href={deployed}
                target="_blank"
              >
                Deployed Application
              </button>
              {"  "}
              <button type="button" className="btn" href={repo} target="_blank">
                Repository
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
