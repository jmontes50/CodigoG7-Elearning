// function saludo (nombre) {
//     return `Hola, soy ${nombre}`
// }

//funcion flecha
//let nombreF = (parametros) => {}

// let saludo = (nombre) => {
//     return `Hola, soy ${nombre}`
// }

//poner en la misma linea sin necesidad del return y retornara lo que este después de la =>
// let saludo = (nombre) => `Hola, soy ${nombre}`

// let saludo = nombre => `Hola, soy ${nombre}`

let saludo = (nombre = "Daniel") => `Hola, soy ${nombre}`

console.log(saludo("Jorge"));

console.log(saludo());