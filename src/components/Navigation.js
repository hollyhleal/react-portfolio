// import "../styles/Navigation.css";
import { Nav } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Nav className="justify-content-end">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Nav.Link
            to="/react-portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About Me
          </Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link
            to="/react-portfolio/portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Portfolio
          </Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link
            to="/react-portfolio/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link
            to="/react-portfolio/resume"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Resume
          </Nav.Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
