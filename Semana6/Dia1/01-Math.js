/**
Math es un objeto que va a tener métodos estáticos, no necesita ser instanciado

no tengo que utilizar la palabra new
 */

let raiz = Math.sqrt(25)

console.log("raíz", raiz)

let oferta = 29.9999999999;

//redondea para abajo
console.log("oferta",Math.floor(oferta))

let vuelto = 0.1

//redondea para arriba
console.log("vuelto", Math.ceil(vuelto))

//redondear al valor entero más cercano
let precio = 4.4

console.log("redondeo", Math.round(precio))

let valor = 10.4999999999999;

//redondeo según decimales
console.log(valor.toFixed(2));

let aleatorio = Math.random()

console.log("aleatorio", aleatorio)


let entre20y50 = Math.random() * (50 - 20) + 20

console.log(entre20y50)
