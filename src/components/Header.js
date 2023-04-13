import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "./Navigation";
// import "../styles/Header.css";

function Header() {
  return (
    <Container fluid>
      <Navbar.Brand>Holly Leal</Navbar.Brand>
      <Navigation />
    </Container>
  );
}

export default Header;
