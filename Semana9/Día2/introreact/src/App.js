//1. los nombres de los componentes tienen que comenzar con Mayúscula
const App = () => {
  //2. todo los archivos que utilicemos para la aplicación tienen que estar dentro de la carpeta src
  //3. todo componente debe tener un return
  //3.1 dentro de ese return ira el JSX, React utiliza para los return que contengan JSX el símbolo de paréntesis ()
  return (
    <div>
      <p>Hola Mundo!</p>
    </div>
  )

}
//1.1 todo componente de react tiene que ser exportado por defecto
export default App