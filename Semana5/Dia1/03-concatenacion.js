let saludo = "Hola ";

let presentacion = "soy Jorge";

console.log(saludo + presentacion);

let a = "10"; //string

let b = 2; //number

console.log("suma", a + b);

console.log("resta", a - b);

//Template String, Template Literal
//${aquí adentro podemos poner código de JS}
let edad = 31;

//Backticks ``
let oracion = `Buenas Noches ${presentacion}, mucho gusto, tengo ${edad} años`;

console.log(oracion);

// prompt, simple de obtener datos del usuario
let cantidadMascotas = prompt("Hola cuantas mascotas tienes?");

console.log(`Mascotas : ${cantidadMascotas}`);

//typeof me muestra el tipo de dato de algo
//toda la información que obtenemos del usuario, suele estar en formato string
console.log(typeof cantidadMascotas);

//enteros
// let convertido = parseInt(cantidadMascotas);
//decimales
// let convertido = parseFloat(cantidadMascotas);
//se puede convertir facilmente un string a números colocandole un + adelante
let convertido = +cantidadMascotas;

console.log(convertido);
console.log(typeof convertido);
