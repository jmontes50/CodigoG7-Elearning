import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { obtenerCategoriaPorId } from "../services/categoriaService"
import CategoriasMenu from "../components/CategoriasMenu"

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
  },[catId])

  if(!categoria) {
    //poner algo de carga, como mi estado de categoria es null, evitar tener errores al revisar propiedades como lug_nom
    return <h4>Cargando...</h4>
  }

  return (
    <div className="row">     
      <h1 className="mb-4">
        {categoria.cat_nom}
      </h1>
      <div className="col-12 col-md-4">
        <CategoriasMenu />
      </div>
      <div className="col-12 col-md-8">
        <h4 className="mb-3">Lugares recomendados</h4>
        <div className="row">
          {categoria.lugares.map(({lug_nom, lug_dir, lug_desc, lug_img, lug_id, categoriaId}, i) => (
            <div className="col-md-12 col-lg-4" key={i}>
              <div className="card mb-3">
                <img src={lug_img} className="card-img-top" alt={lug_nom} />
                <div className="card-body">
                  <h5 className="card-title">{lug_nom}</h5>
                  <p className="card-text">
                    {lug_desc}
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-location-dot text-success me-2" />
                    {lug_dir}
                  </p>
                  <Link className="btn btn-success" to={`/detallelugar/${categoriaId}/${lug_id}`}>
                    Conocer Lugar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
