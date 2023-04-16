import { projects } from "../ProjectData";

function Project() {
  return (
    <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2">
      {projects.map(({ image, title, description, deployed, repo }) => (
        <div class="col mb-4">
          <div class="card h-100">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <a
                href={deployed}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Deployed Application
              </a>
              {"  "}
              <a href={repo} target="_blank" rel="noreferrer" className="btn">
                Repository
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
