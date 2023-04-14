import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <Container fluid>
      <Navbar.Brand>
        <h1>Holly Leal</h1>
      </Navbar.Brand>
      <Navigation />
    </Container>
  );
}

export default Header;
