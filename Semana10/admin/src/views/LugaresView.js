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
    <div>LugaresView</div>
  )
}
