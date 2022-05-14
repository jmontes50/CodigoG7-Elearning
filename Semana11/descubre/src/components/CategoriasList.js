import { useState, useEffect } from "react";
import { obtenerCategorias } from "../services/categoriaService";

export default function CategoriasList() {
  const [misCategorias, setMisCategorias] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const getCategorias = async () => {
    try {
      const catObtenidas = await obtenerCategorias(page, limit);
      setMisCategorias([...misCategorias, ...catObtenidas]);
    } catch (error) {
      console.log(error);
    }
  };

  const manejarVerMas = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    getCategorias();
  }, [page]);

  return (
    <div>
      {misCategorias.map(({ cat_nom }, i) => (
        <button className="btn btn-success btn-sm me-2" key={i}>
          {cat_nom}
        </button>
      ))}
      <button className="btn btn-outline-success btn-sm" onClick={manejarVerMas}>
        Ver más...
      </button>
    </div>
  );
}
