import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeView from "./views/HomeView"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </Router>
  )
}
