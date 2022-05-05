//peticiones - axios
import axios from "axios";

const URL = "https://62729d5925fed8fcb5f724b1.mockapi.io/categorias";

const obtenerCategorias = () => {
    return new Promise ((resolve, reject) => {
        axios.get(URL)
        .then((rpta) => {
            console.log(rpta)
        })
        .catch((error) => {
            console.log(error)
        })
    })
}

export {
    obtenerCategorias
}