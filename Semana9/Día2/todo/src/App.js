import { useState } from "react"

export default function App() {
  //const [estado, funcSetEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["Lavar la Ropa","Comprar Té"])
  const [nuevaTarea, setNuevaTarea] = useState("mi tarea")
  //Componentes controlados, todo value de un input debe estar amarrado a un estado

  //si una funcion retorna con () dentro de react, react asume que el return es JSX
  return (
    <div>
      <h1>ToDo App</h1>
      <ul>
        {/**renderizado de listas */}
        {/**Cuando hacemos renderizado de listas hay que añadir a c/elemento un key y lo común es darle el indice(posición) de c/elemento en el arreglo */}
        {tareas.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Lavar la ropa"
        value={nuevaTarea}
        onChange={(e) => {setNuevaTarea(e.target.value)}}
      />
    </div>
  )
}
