//desestructuración con arreglos
let fruits = ["Manzana","Papaya","Kiwi","Piña"];

// let fruit1 = fruits[0]
// let fruit2 = fruits[1]
// let fruit3 = fruits[2]
// console.log(fruit1);

//No escribir tantas lineas de código
let [fruit1, fruit2, fruit3, fruit4] = fruits;

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)
console.log(fruit4)

//---------------------------------------------------

//desestructación de objetos

let person = {
    name:"Alexandra",
    apellidos:"Espinoza",
    edad:20,
    genero:"Mujer",
    ocupacion:{
        tipo:"Estudiante",
        anio_ini: 2019,
        institucion:"Univ. Ricardo Palma"
    }
}

// console.log(person.edad);

let {name, apellidos, edad} = person

console.log(name)

console.log(edad)