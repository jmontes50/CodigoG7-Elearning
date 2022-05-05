
export default function InputTareaComponent({nuevaTarea, setNuevaTarea, agregarTarea}) {

    const manejarInput = (e) => {
      setNuevaTarea(e.target.value)
    }

    const manejarInputEnter = (e) => {
     try {
      if(e.key === "Enter"){
        agregarTarea()
      }
     } catch (error) {
       console.log(error)
     }
    }
  return (
    <div>
        <input 
            type="text"
            placeholder="Ingrese una nueva Tarea"
            value={nuevaTarea}
            onChange={(e) => {manejarInput(e)}}
            onKeyUp={(e) => {manejarInputEnter(e)}}
        />
        <button
          onClick={agregarTarea}
        >
          Agregar!
        </button>
    </div>
  )
}
