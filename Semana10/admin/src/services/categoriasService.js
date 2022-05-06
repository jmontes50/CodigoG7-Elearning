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

const crearCategoria = async (nuevaCategoria) => {
    console.log(nuevaCategoria)
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        //.post(url, data, {headers})
        const { data, status } = await axios.post(URL, nuevaCategoria, {headers})
        console.log(status)
        if(status === 201){
            return data
        }else{
            throw "Error al obtener data"
        }
    } catch (error) {
        throw error
    }
}

export {
    obtenerCategorias,
    crearCategoria
}