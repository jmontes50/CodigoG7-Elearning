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

const saludo = (nombre = "Daniel") => `Hola, soy ${nombre}`

console.log(saludo("Jorge"));

console.log(saludo());

const arreglo = ["Fresa","Kiwi"]

// arreglo = ["Fresa","Kiwi","Papaya"]

arreglo.push("Papaya")

console.log(arreglo)

//si hay algo que no va a cambiar o funciones, declarenlo con const