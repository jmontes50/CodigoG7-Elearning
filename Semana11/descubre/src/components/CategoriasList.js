import { useState, useEffect } from "react";
import { obtenerCategorias } from "../services/categoriaService";
import { Link } from "react-router-dom";

import LugaresList from "./LugaresList";

export default function CategoriasList() {
  const [misCategorias, setMisCategorias] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

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
      <div className="row">
        {misCategorias.map(({ cat_nom, cat_img }, i) => (
          // <button className="btn btn-success btn-sm me-2" key={i}>
          //   {cat_nom}
          // </button>
          <div className="col-12 col-md-6" key={i}>
            <Link 
              className="card mb-3 card-categoria" 
              style={{backgroundImage:`url(${cat_img})`}}
              to="/"
            >
              <div className="card-body">
                <h4 className="card-title">{cat_nom}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="btn btn-outline-success btn-sm" onClick={manejarVerMas}>
        Ver más...
      </button>
      <LugaresList misCategorias={misCategorias} />
    </div>
  );
}
