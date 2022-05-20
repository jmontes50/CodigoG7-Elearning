import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import FavoritosContextProvider from "./context/favoritosContext"
import { AuthContextProvider } from "./context/authContext"
import BarNavigation from "./components/BarNavigation"
import HomeView from "./views/HomeView"
import DetalleLugarView from "./views/DetalleLugarView"
import FavoritosView from "./views/FavoritosView"
import LoginView from "./views/LoginView"

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <FavoritosContextProvider>
          <BarNavigation />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/detallelugar/:catId/:lugId" element={<DetalleLugarView />} />
              <Route path="/favoritos" element={<FavoritosView />} />
              <Route path="/login" element={<LoginView />} />
            </Routes>
          </div>
        </FavoritosContextProvider>
      </AuthContextProvider>
    </Router>
  )
}
