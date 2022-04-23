// const traerDatos = () => {
//     return new Promise ((resolve, reject) => {
//         resolve("Datos Obtenidos")
//     })
// }

const traerDatos = async () => {
    // return "Data Obtenida"; //resolve - bien
    throw "Error al obtener los datos" //reject - mal
}

traerDatos()
.then((rpta) => {
    console.log(rpta)
})
.catch((error) => {
    console.log(error)
})