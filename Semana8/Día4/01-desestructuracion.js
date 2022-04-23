//desestructuración con arreglos
let fruits = ["Manzana", "Papaya", "Kiwi", "Piña"];

// let fruit1 = fruits[0]
// let fruit2 = fruits[1]
// let fruit3 = fruits[2]
// console.log(fruit1);

//No escribir tantas lineas de código
let [fruit1, fruit2, fruit3, fruit4] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);

//---------------------------------------------------

//desestructación de objetos

let person = {
  name: "Alexandra",
  apellidos: "Espinoza",
  edad: 20,
  genero: "Mujer",
  ocupacion: {
    tipo: "Estudiante",
    anio_ini: 2019,
    institucion: "Univ. Ricardo Palma",
  },
};

// console.log(person.edad);

let {
  name,
  apellidos,
  edad,
  ocupacion: { institucion },
  ocupacion
} = person;

console.log(name);
console.log(edad);
console.log(institucion)
// console.log(ocupacion)

const describe = ({nombre, apellidos, edad, lugar, comida}) => {
    return `Hola, soy ${nombre} ${apellidos}, tengo ${edad} años y vengo de ${lugar} donde ${comida} es el plato típico`;
}

let nuevaPersona = {
    apellidos:"Diaz",
    lugar:"Gotham",
    comida:"la Hamburguesa",
    edad:24,
    nombre:"Bruno",
}

// console.log(describe("Perez","Juan", 20, "Arequipa", "es el Rocoto relleno"));

console.log(describe(nuevaPersona))