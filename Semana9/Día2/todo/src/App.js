import { useState } from "react"

export default function App() {
  //const [estado, funcSetEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["Lavar la Ropa","Comprar Té","Juntarse con amigos"])
  const [nuevaTarea, setNuevaTarea] = useState("mi tarea")
  //Componentes controlados, todo value de un input debe estar amarrado a un estado

  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea])
    setNuevaTarea("")
  }

  const eliminarTarea = (indice) => {
    let tareasTmp = [...tareas]
    tareasTmp.splice(indice, 1)
    setTareas(tareasTmp)
  }

  //si una funcion retorna con () dentro de react, react asume que el return es JSX
  return (
    <div>
      <h1>ToDo App</h1>
      <ul>
        {/**renderizado de listas */}
        {/**Cuando hacemos renderizado de listas hay que añadir a c/elemento un key y lo común es darle el indice(posición) de c/elemento en el arreglo */}
        {tareas.map((item, i) => (
          <div key={i}>
            <li>{item}</li>
            <button onClick={() => {eliminarTarea(i)}}>
              Eliminar
            </button>
          </div>
        ))}
      </ul>
      {/* componentes controlados */}
      <input
        type="text"
        placeholder="Lavar la ropa"
        value={nuevaTarea}
        onChange={(e) => {setNuevaTarea(e.target.value)}}
      />
      {/* eventos, onNombreDelEvento={func a ejecutar} */}
      <button onClick={() => {agregarTarea()}}>
        Añadir Tarea
      </button>
    </div>
  )
} 
