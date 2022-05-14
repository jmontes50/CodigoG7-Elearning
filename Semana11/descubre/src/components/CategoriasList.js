import { useState, useEffect } from "react";
import { obtenerCategorias } from "../services/categoriaService";

export default function CategoriasList() {

  const [misCategorias, setMisCategorias] = useState([])

  const getCategorias = async () => {
    try {
      const catObtenidas = await obtenerCategorias()
      console.log(catObtenidas)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategorias()
  }, [])
  
  return <div>CategoriasList</div>;
}
