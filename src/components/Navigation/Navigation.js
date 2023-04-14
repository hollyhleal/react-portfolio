import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

function Navigation() {
  return (
    <Nav className="justify-content-center">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/react-portfolio">ABOUT ME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/react-portfolio/portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/react-portfolio/contact">CONTACT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/react-portfolio/resume">RESUME</NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
