import DashboardView from "./views/DashboardView"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./components/Navigation"
//import Imagen from "./img/miImagen.jpg"

export default function App() {
  // <> = Fragment
  return (
    <> 
      <Navigation />
      <DashboardView />
    </>
  )
}
