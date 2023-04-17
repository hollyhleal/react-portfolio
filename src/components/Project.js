import { projects } from "../ProjectData";
import "../components/pages/Portfolio/Portfolio.css";

function Project() {
  return (
    <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2">
      {projects.map(({ image, title, description, deployed, repo }) => (
        <div class="col mb-4">
          <div class="card h-100 animate__animated animate__bounceInUp">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <div className="container">
                <div className="btnRow row justify-content-around">
                  <a
                    href={deployed}
                    target="_blank"
                    rel="noreferrer"
                    className="col linkBtn btn"
                  >
                    Deployed Application
                  </a>
                </div>
                {"  "}
                <div className="btnRow row justify-content-around">
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="col linkBtn btn"
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
