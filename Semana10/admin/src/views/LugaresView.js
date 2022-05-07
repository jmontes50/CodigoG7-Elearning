import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"

export default function LugaresView() {

  const [lugares, setLugares] = useState([])

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const categorias = await obtenerCategorias()
        // console.log(categorias)
        //1. he filtrado solo las categorias que tengan al menos 01 lugar -> lugares.length
        const catFiltradas = categorias.filter((cat) => cat.lugares.length > 0)
        // console.log("filtrado", catFiltradas)
        //2. al tener esas categorias filtradas solamente me quedo con su propiedad lugares y el flat para que todo este en 01 solo arreglo
        const arrLugares = catFiltradas.map((cat) => cat.lugares).flat()
        setLugares(arrLugares)
      } catch (error) {
        console.log(error)
      }
    }
    getCategorias();
  }, [])
  
  return (
    <div>
      <h1 className="mb-3">
        Lugares
      </h1>
      <button className="btn btn-success mb-2">
        Crear nuevo lugar
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lugares.map(({lug_nom, lug_desc, lug_dir}, i) => (
            <tr key={i}>
              <td>{lug_nom}</td>
              <td>{lug_desc}</td>
              <td>{lug_dir}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
