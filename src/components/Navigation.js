import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          About Me
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/resume">
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
