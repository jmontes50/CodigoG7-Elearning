//peticiones - axios
import axios from "axios";

const URL = "https://62729d5925fed8fcb5f724b1.mockapi.io/categorias";

const obtenerCategorias = () => {
    return new Promise ((resolve, reject) => {
        axios.get(URL)
        .then(({data, status}) => {
            //valido el status - ok
            if(status === 200){
                resolve(data)
            }else{
                reject("Error al obtener data")
            }
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export {
    obtenerCategorias
}