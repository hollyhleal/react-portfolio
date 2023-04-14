import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

function Navigation() {
  return (
    <Nav className="justify-content-center">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/react-portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            ABOUT ME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/portfolio"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            CONTACT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/react-portfolio/resume"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            RESUME
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
