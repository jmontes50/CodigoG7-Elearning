//cosas globales
import "bootstrap/dist/css/bootstrap.min.css"
//Vistas
import DashboardView from "./views/DashboardView"
import CrearCategoriaView from "./views/CrearCategoriaView"
//Componentes
import Navigation from "./components/Navigation"

//import Imagen from "./img/miImagen.jpg"

export default function App() {
  // <> = Fragment
  return (
    <> 
      <Navigation />
      <DashboardView />
      <CrearCategoriaView />
    </>
  )
}
