import { useState } from "react"

export default function App() {
  //const [estado, funcSetEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["Lavar la Ropa","Comprar Té"])

  //si una funcion retorna con () dentro de react, react asume que el return es JSX
  return (
    <div>
      <h1>ToDo App</h1>
      <ul>
        {/**renderizado de listas */}
        {tareas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}
