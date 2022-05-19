import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function BarNavigation() {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand>
            Descubre App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/">
              Mis favoritos
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
