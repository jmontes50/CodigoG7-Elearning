import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FavoritosContextProvider from "./context/favoritosContext"
import BarNavigation from "./components/BarNavigation"
import HomeView from "./views/HomeView"
import DetalleLugarView from "./views/DetalleLugarView"

export default function App() {
  return (
    <Router>
      <FavoritosContextProvider>
        <BarNavigation />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/detallelugar/:catId/:lugId" element={<DetalleLugarView />} />
          </Routes>
        </div>
      </FavoritosContextProvider>
    </Router>
  )
}
