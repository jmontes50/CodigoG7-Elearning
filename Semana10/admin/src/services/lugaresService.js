import axios from "axios"

const URL = "https://62729d5925fed8fcb5f724b1.mockapi.io";

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