// const traerDatos = () => {
//     return new Promise ((resolve, reject) => {
//         resolve("Datos Obtenidos")
//     })
// }

const traerDatos = async () => {
    // return "Data Obtenida"; //resolve - bien
    throw "Error al obtener los datos" //reject - mal
}

// traerDatos()
// .then((rpta) => {
//     console.log(rpta)
// })
// .catch((error) => {
//     console.log(error)
// })

const pedirDatos = async () => {
    //await = Wait Chepiiiii, espera, esto es asíncrono
    try {
        //ejecuta este bloque de codigo y si todo va bien dame el resultado .then() / return / resolve
        let rpta = await traerDatos(); 
        console.log(rpta)
    } catch (errorcito) { //.catch() //throw / reject
        console.log(errorcito)
    }
}
pedirDatos()