import DashboardView from "./views/DashboardView"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Container } from "react-bootstrap"
//import Imagen from "./img/miImagen.jpg"

export default function App() {
  // <> = Fragment
  return (
    <> 
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand>
            Admin App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <DashboardView />
    </>
  )
}
