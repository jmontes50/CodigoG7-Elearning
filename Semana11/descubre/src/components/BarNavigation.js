import { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import { FavoritosContext } from "../context/favoritosContext";
import { AuthContext } from "../context/authContext";

export default function BarNavigation() {
  const { favoritos } = useContext(FavoritosContext)
  const { user, salir } = useContext(AuthContext)

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
            {user ? (
              <Link className="nav-link" to="/favoritos">
                <Badge badgeContent={favoritos.length} color="success">
                  Mis favoritos
                </Badge>
              </Link>
            ) : null}
          </Nav>
          <Nav>
            {user ? (
              <NavDropdown
                title={
                  <div className="d-inline">
                    <img
                      src={user.photoURL}
                      className="me-2"
                      style={{borderRadius: "50%", width: "30px"}}
                      alt="foto usuario"
                    />
                    <span>{user.displayName}</span>
                  </div>
                }
              >
                <NavDropdown.Item onClick={salir}>Salir</NavDropdown.Item>
              </NavDropdown>
            ):(
              <Link className="nav-link" to="/login">Ingresa</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
