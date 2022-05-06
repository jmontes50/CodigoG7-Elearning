import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand>
            Admin App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">1
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
            <Link className="nav-link" to="/crearcategoria">
              Crear Categoria
            </Link>
            <Link className="nav-link" to="/crearlugar">
              Crear Lugar
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
