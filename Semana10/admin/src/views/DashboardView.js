import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"

export default function DashboardView() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias()
  })


  return (
    <div>DashboardView</div>
  )
}
