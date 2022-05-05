import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"

export default function DashboardView() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias()
    .then((data) => {
      setCategorias(data)
    })
    .catch((error) => {
      console.log(error)
    })
    //si le damos como argumento al useEffect un arreglo vacio como 2do parámetro, el useEffect solo se ejecutará una vez en la fase de montaje
  }, [])


  return (
    <>
      <h1>Dashboard</h1>
      <div className="card mt-3">
        <div className="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>
                  Nombre
                </th>
                <th>
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
