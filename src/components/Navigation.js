import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          About Me
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/portfolio"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/resume"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
