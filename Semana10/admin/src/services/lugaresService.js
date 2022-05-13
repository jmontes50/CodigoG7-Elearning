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

const obtenerLugarPorId = async(idCat, idLugar) => {
    try {
        const endpoint = `${URL}/categorias/${idCat}/lugares/${idLugar}`
        const { data, status } = await axios.get(endpoint)
        if(status === 200){
            return data
        }else{
            throw Error("Error al obtener el lugar")
        }
    } catch (error) {
        throw error
    }
}

const editarLugar = async (idCat, idLugar, lugarEditado) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        const endpoint = `${URL}/categorias/${idCat}/lugares/${idLugar}`
        const { data, status } = await axios.put(endpoint, lugarEditado, { headers })
        console.log(status)
        if(status === 200){
            return data
        }else{
            return Error("Error al editar lugar")
        }
    } catch (error) {
        return error
    }
}

const eliminarLugar = async (idCat, idLugar) => {
    try {
        const endpoint = `${URL}/categorias/${idCat}/lugares/${idLugar}`
        const { status } = await axios.delete(endpoint)
        console.log(status)
        if(status === 200){
            return "ok"
        }else{
            return Error("Error al eliminar lugar")
        }
    } catch (error) {
        return error
    }
}

export {
    crearLugar,
    obtenerLugarPorId,
    editarLugar,
    eliminarLugar
}