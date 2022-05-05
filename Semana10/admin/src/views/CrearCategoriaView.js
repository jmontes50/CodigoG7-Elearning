import { useState } from "react"

export default function CrearCategoriaView() {
  const [input, setInput] = useState({
    cat_nom:"",
    cat_desc:""
  })

  const manejarInput = (e) => {
    console.log("NAME",e.target.name)
    console.log("VALUE",e.target.value)
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  }
  return (
    <>
        <h1>Crear Categoria</h1>
        <form>
            <div className="mb-3">
                <label className="form-label">
                    Nombre categoria
                </label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Ej. Cafés"
                    name="cat_nom"
                    value={input.cat_nom}
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
                />
            </div>
        </form>
    </>
  )
}
