
export default function InputTareaComponent({nuevaTarea, setNuevaTarea}) {

    const manejarInput = (e) => {
        setNuevaTarea(e.target.value)
    }
  return (
    <div>
        <input 
            type="text"
            placeholder="Ingrese una nueva Tarea"
            value={nuevaTarea}
            onChange={(e) => {manejarInput(e)}}
        />
    </div>
  )
}
