//cosas globales
import "bootstrap/dist/css/bootstrap.min.css"
// import Francisco as pancho ... en resumen es un alias
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//Vistas
import DashboardView from "./views/DashboardView"
import CrearCategoriaView from "./views/CrearCategoriaView"
import LugaresView from "./views/LugaresView"
import CrearLugarView from "./views/CrearLugarView"
import EditarLugarView from "./views/EditarLugarView"
//Componentes
import Navigation from "./components/Navigation"

//import Imagen from "./img/miImagen.jpg"

export default function App() {
  // <> = Fragment
  return (
    //Router servirá como una envoltura para manejar todas las rutas internamente
    <Router> 
      <Navigation />
      <div className="container pt-4">
        {/* Dentro de Routes crearemos nuestras rutas */}
        <Routes>
          {/* <Route path="/url" element={<Componente />} />*/}
          <Route path="/" element={<DashboardView />} />
          <Route path="/crearcategoria" element={<CrearCategoriaView />} />
          <Route path="/lugares" element={<LugaresView />} />
          <Route path="/crearlugar" element={<CrearLugarView />} />
          {/* cuando ponemos path="/direccion/:param" lo que estamos es indicar que en esa ubicación vamos a recibir un parámetro*/}
          <Route path="/editarlugar/:idCat/:idLugar" element={<EditarLugarView />} />
        </Routes>
      </div>
    </Router>
  )
}
