import { useState } from "react"
import { crearCategoria } from "../services/categoriasService"

export default function CrearCategoriaView() {
  const [inputs, setInputs] = useState({
    cat_nom:"",
    cat_desc:""
  })

  const manejarInput = (e) => {
    // console.log(e)
    // console.log("NAME",e.target.name)
    // console.log("VALUE",e.target.value)
    setInputs({
      ...inputs,
      //e.target.name => "cat_nom"
      [e.target.name]:e.target.value
    })
  }

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearCategoria(inputs)
      alert("Categoria Creada")
      setInputs({
        cat_nom:"",
        cat_desc:""
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
        <h1>Crear Categoria</h1>
        <form onSubmit={(e) => {manejarSubmit(e)}}>
            <div className="mb-3">
                <label className="form-label">
                    Nombre categoria
                </label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Ej. Cafés"
                    name="cat_nom"
                    value={inputs.cat_nom}
                    onChange={(e) => {manejarInput(e)}}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Descripción categoria
                </label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Indique una descripción larga de la categoria"
                    name="cat_desc"
                    value={inputs.cat_desc}
                    onChange={(e) => {manejarInput(e)}}
                />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
        </form>
    </>
  )
}
