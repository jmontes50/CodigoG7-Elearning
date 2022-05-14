import axios from "axios";

const URL = process.env.REACT_APP_API;

const obtenerCategorias = async () => {
    try {
        const { data, status } = await axios.get(URL);
        if(status === 200) return data
        throw Error("Error al obtener data")
    } catch (error) {
        throw error
    }
}

export {
    obtenerCategorias
}