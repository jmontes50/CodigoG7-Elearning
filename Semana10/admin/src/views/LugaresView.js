import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"
import { Link } from "react-router-dom"
import { eliminarLugar } from "../services/lugaresService"
import Swal from "sweetalert2"

export default function LugaresView() {

  const [lugares, setLugares] = useState([])

  const deleteLugar = async (idCat, idLugar) => {
    try {
      const resultado = await Swal.fire({
        title: 'Desea eliminar este Lugar',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: `No, cancelar`,
      })
      if(resultado.isConfirmed){
        await eliminarLugar(idCat, idLugar)
        Swal.fire({
          title:"Lugar eliminado",
          icon:"success"
        })
        getCategorias()
      }
    } catch (error) {
      console.log(error)
    }
  }

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

  useEffect(() => {
    getCategorias();
  }, [])
  
  return (
    <div>
      <h1 className="mb-3">
        Lugares
      </h1>
      <Link className="btn btn-success mb-2" to="/crearlugar">
        Crear nuevo lugar
      </Link>
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
          {lugares.map(({lug_nom, lug_desc, lug_dir, lug_id, categoriaId}, i) => (
            <tr key={i}>
              <td>{lug_nom}</td>
              <td>{lug_desc}</td>
              <td>{lug_dir}</td>
              <td>
                {/* la url para llevarnos a la vista de editar va a ser armada con editarlugar y el id de la categoria y el lugar respectivamente */}
                <Link className="btn btn-warning btn-sm" to={`/editarlugar/${categoriaId}/${lug_id}`}>
                  <i className="fa-solid fa-file-pen" />
                </Link>

                <button 
                  className="btn btn-danger btn-sm ms-2" 
                  onClick={() => {deleteLugar(categoriaId, lug_id)}}
                >
                  <i className="fa-solid fa-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
