import { useState, useEffect } from "react"
import List from "./components/List"
//1. los nombres de los componentes tienen que comenzar con Mayúscula
const App = () => {
  //2. todo los archivos que utilicemos para la aplicación tienen que estar dentro de la carpeta src
  //3. todo componente debe tener un return
  //3.1 dentro de ese return ira el JSX, React utiliza para los return que contengan JSX el símbolo de paréntesis ()
  //4. el return solo puede retornar 01 sola etiqueta

  //los estados de un componente son INMUTABLES es que no se pueden modificar
  //let [estado, funciónQueActualizaElEstado] = useState(estadoInicial)
  let [contador, setContador] = useState(0)
  let [nombre, setNombre] = useState("Jorge")

  console.log("Yo estoy dentro de App!")

  let miTexto = "Hola desde Javascript!!!";
  //5. cuando deseemos incluir código de JS dentro de JSX tenemos que utilizar {}

  const saludar = () => {
    return "Holaaaaa desde una función"
  }
  let subtitulo = "Lista subtítulo"

  //el useEffect se va a ejecutar cuando suceda un cambio en algún de estado del componente
  //puede escuchar a un estado y tambien a los props
  //el useEffect por defecto, escucha a todos los estados
  //useEffect(() => {}, [filtro]) , puedo agregar variables como filtro [] para que la función del useEffect solo se ejecute respecto al filtro que le pongamos
  //a pesar que le pongamos filtro el useEffect se ejecuta si o si en el montaje
  useEffect(() => {
    console.log("Cambio el estado!")
    //desmontaje
    return () => {
      //se ejecutaria algo al desmontar mi componente
    }
  }, [nombre]) 

  useEffect(() => {
    console.log("cambio el estado de contador", contador)
  }, [contador])

  return (
    <>
      <div>
        {console.log("Yo estoy dentro de el JSX")}
        <p>Hola Mundo!</p>
      </div>
      <div>
        <p>{miTexto}</p>
        <p>{10 + 20}</p>
        <p>{saludar()}</p>
        <p>Contador: {contador}</p>
        <p>Nombre: {nombre}</p>
      </div>
      <button onClick={() => {setContador(contador ++)}}>
        Aumentar!
      </button>
      <button onClick={() => setNombre("Jorge Montesinos")}>
        Cambiar Nombre
      </button>
      <hr></hr>
      {/**OJO: Cuando podemos etiquetas ya sea de HTML o de un componente, tenemos que asegurarnos que siempre esten cerradas */}
      {/** List("subtitulo 4") */}
      <List miSubtitulo={subtitulo}/>
      <List miSubtitulo="subtitulo 2"/>
      <List miSubtitulo="subtitulo 3"/>
      <List miSubtitulo={6}/>
    </>
  )

}
//1.1 todo componente de react tiene que ser exportado por defecto
export default App