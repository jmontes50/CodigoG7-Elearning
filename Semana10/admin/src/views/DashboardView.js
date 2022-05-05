import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"

export default function DashboardView() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias()
    .then((data) => {
      setCategorias(data)
    })
    //si le damos como argumento al useEffect un arreglo vacio como 2do parámetro, el useEffect solo se ejecutará una vez en la fase de montaje
  }, [])


  return (
    <div>DashboardView</div>
  )
}
