import axios from "axios";

const URL = process.env.REACT_APP_API;

const obtenerReservas = async (uid) => {
    try {
        const { data, status } = await axios.get(`${URL}/reservas?uid=${uid}`)
        if(status === 200) return data
        throw Error("Error al obtener")
    } catch (error) {
        throw (error)
    }
}

const crearReserva = async (nuevaReserva) => {
    try {
        const headers = {
            'Content-Type':'application/json'
        }
        const { data, status } = await axios.post(`${URL}/reservas`, nuevaReserva, {headers})
        if(status === 201) return data
        throw Error("Error al crear")
    } catch (error) {
        throw error
    }
}

export {
    obtenerReservas,
    crearReserva
}