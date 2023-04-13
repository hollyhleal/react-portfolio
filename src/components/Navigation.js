// import "../styles/Navigation.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav className="justify-content-end">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/react-portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/react-portfolio/portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/react-portfolio/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/react-portfolio/resume"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
