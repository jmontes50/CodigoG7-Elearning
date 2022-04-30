import { useState } from "react";
import TareaComponent from "./components/TareaComponent";
import InputTareaComponent from "./components/InputTareaComponent";

export default function App() {
  const [tareas, setTareas] = useState(["bañar al perro"]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  
  const agregarTarea = () => {
    setTareas([...tareas, nuevaTarea])
  }

  const eliminarTarea = (indice) => {
      let tareasTmp = [...tareas]
      tareasTmp.splice(indice, 1)
      setTareas(tareasTmp)
  }
  
  return (
    <div>
      <h1>ToDo App</h1>

      {tareas.map((item, i) => (
        <TareaComponent 
            key={i} 
            tarea={item} 
            eliminarTarea={eliminarTarea}
            indice={i}
        />
      ))}

      <InputTareaComponent
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        agregarTarea={agregarTarea}
      />
    </div>
  );
}
