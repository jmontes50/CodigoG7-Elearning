//se va a encargar de obtener los datos, hacer operaciones relacionadas con datos

const URL = "https://62636b83c430dc560d2ebb2a.mockapi.io/productos";

const getProducts = () => {
    //la tarea dentro de la promesa se va a resolver/terminar en algún punto en el futuro
    return new Promise((resolve, reject) => {
        //fetch asi de forma simple hará un GET y solo necesita la URL
        fetch(URL)
        .then((rpta) => {
            // console.log(rpta)
            return rpta.json() //una nueva promesa, para brindarme la data de la petición en forma de un arreglo/obj de JS
        }).then((data) => {
            // console.table(data)
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
    })
}
/** 
    const getProducts = async () => {
        try {
            //GET
            const rpta = await fetch(URL) //fetch me da la respuesta, no los datos
            console.log(rpta)
            const datos = await rpta.json() 
            return datos;
        } catch (error) {
            throw error;
        }
    }
*/

const createProduct = async (objProduct) => {
    //Para crear el Producto necesitamos hacer un POST
    const config = {
        method: "POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(objProduct)
    }
    //fetch al retornar una promesa lo podemos utilizar con await
    try {
        //fetch(URL_del_endpoint, configuración)
        const rpta = await fetch(URL, config) //la rpta tiene el statusCode: 201
        const data = await rpta.json() //mockAPI nos va a devolver en la respuesta el objeto creado
        return data
    } catch (error) {
        throw error
    }
}

export {
    getProducts,
    createProduct
}