import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand>
            Admin App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
