import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

function Navigation() {
  return (
    <Nav className="justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/react-portfolio" className="navStyle">
            ABOUT ME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/react-portfolio/portfolio" className="navStyle">
            PORTFOLIO
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/react-portfolio/contact" className="navStyle">
            CONTACT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/react-portfolio/resume" className="navStyle">
            RESUME
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
