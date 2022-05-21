import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerCategorias } from "../services/categoriaService";

export default function CategoriasMenu() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const catsObtenidas = await obtenerCategorias()
        setCategorias(catsObtenidas)
      } catch (error) {
        console.log(error)
      }
    }
    getCategorias()
  })
  return (
    <div>
      <h4 className="mb-3">
        Seleccione una categoría
      </h4>
      <ul className="list-group menu-categorias">
        {categorias.map(({cat_nom, cat_id}, i) => (
          <li className="list-group-item" key={i}>
            <Link to={`/categoria/${cat_id}`}>
              {cat_nom}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
