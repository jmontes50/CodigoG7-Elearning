import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { obtenerCategoriaPorId } from "../services/categoriaService"

export default function CategoriaView() {
  const [categoria, setCategoria] = useState(null)

  const { catId } = useParams() //nos da los parametros de la URL
  
  useEffect(() => {
    const getCategoria = async () => {
      try {
        const catObtenida = await obtenerCategoriaPorId(catId)
        setCategoria(catObtenida)
      } catch (error) {
        console.log(error)
      }
    }
    getCategoria()
  },[])

  return (
    <div className="row">

        
    </div>
  )
}
