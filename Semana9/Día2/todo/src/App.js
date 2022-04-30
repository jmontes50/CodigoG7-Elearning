import { useState } from "react";
import TareaComponent from "./components/TareaComponent";

export default function App() {
    const [tareas, setTareas] = useState(["bañar al perro"])
    const [nuevaTarea, setNuevaTarea] = useState("")
  return (
      <div>
          <h1>ToDo App</h1>
          {tareas.map((item, i) => (
                <TareaComponent 
                    key={i}
                    tarea={item} 
                />
          ))}
      </div>
  );
}
