import axios from "axios"

//process.env hace referencia a las variables de entorno para después indicar que variable deseamos obtener, process.env.NOMBRE_DE_LA_VARIABLE_DE_ENTORNO
const URL = process.env.REACT_APP_API;
// console.log(process.env.REACT_APP_API)

const crearLugar = async(nuevoLugar) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        //.post(URL, datos, {headers})
        const endpoint = `${URL}/categorias/${nuevoLugar.categoriaId}/lugares`
        const { data, status } = await axios.post(endpoint, nuevoLugar, {headers})
        if(status === 201) {
            return data
        }else{
            //Error() es una manera de enviar un error nativo de JS
            throw Error("Error al crear")
        }
    } catch (error) {
        throw error
    }
}

export {
    crearLugar
}