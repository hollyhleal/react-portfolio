import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/react-portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/resume"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
}

export default Navigation;