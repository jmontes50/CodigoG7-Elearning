export default function CrearCategoriaView() {
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
