import { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import { FavoritosContext } from "../context/favoritosContext";

export default function BarNavigation() {

  const { favoritos } = useContext(FavoritosContext)

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
              <Badge badgeContent={favoritos.length} color="success">
                Mis favoritos
              </Badge>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
