export default function TareaComponent({tarea, eliminarTarea, indice}) {
    // console.log(props)
  return (
    <li>
        <span>{tarea}</span>
        <button 
         onClick={() => {eliminarTarea(indice)}}
        >
          Eliminar
        </button>
    </li>
  )
}
