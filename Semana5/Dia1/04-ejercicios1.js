//1. Pedir al usuario sus nombres, apellidos y edad cada uno por separado, el resultado deberia ser un console.log, resumiendo los datos del usuario.

// let nombre = prompt("Cuál es tu nombre?");

// let apellido = prompt("Cuál es tu primer apellido?");

// let edad = prompt("Cuál es tu edad?");

// console.log(`Buenas noches: ${nombre} ${apellido} de ${edad} años de edad`);

//2. Programe un algoritmo que calcule el área de un triángulo, considera las variables necesarias y muestre el resultado en la consola.

//a) Qué datos necesito??
//rpta: la base y la altura
//b) Cómo puedo obtener esos datos?
//rpta: con un prompt
//c) Esos datos están en la forma/formato/tipo, que necesito?
//rpta: convertirlo b y h a un tipo number

//obtengo y convierto
let base = +prompt("Cuánto es la base del triángulo");
let altura = +prompt("Cuánto es la altura del triángulo");

console.log(typeof base);

//convierto
// let baseNumero = parseFloat(base);
// let alturaNumero = parseFloat(altura);

let areaTriangulo = (base * altura) / 2;

console.log(areaTriangulo);
