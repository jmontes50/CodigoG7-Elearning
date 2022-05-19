import { useState, useEffect, createContext } from "react"
//2do paso, crear el contexto, instaciación
export const FavoritosContext = createContext()
//3er paso, crear un provider, no es nada mas que una función y se va a parecer mucho a un componente
const FavoritosContextProvider = (props) => {
    const [favoritos, setFavoritos] = useState([])
    //4to Paso, definir una función que haga uso de setFavoritos, pero que reciba nuevos valores para agregar y de ser necesario realice las validaciones necesarios
    const anadirAFavoritos = (lugar) => {
        //solamente eso por ahora
        setFavoritos([...favoritos, lugar])
    }

    //último paso
    return (
        <FavoritosContext.Provider value={{favoritos, anadirAFavoritos}} >
            {/* con props.children indicamos que este componente va a renderizar componentes hijos pero sin saberlo */}
            {props.children}
        </FavoritosContext.Provider>
    )
}

export default FavoritosContextProvider