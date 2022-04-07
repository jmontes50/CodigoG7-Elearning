let nums = [10, 20, 30, 40];

nums.push(50)
nums.push(60)

// console.log(nums)

nums.pop()

// console.log(nums)

let alumnos = ["Javier","Felipe","Adnner","Camila","Javier"]

// function buscar (){
//     console.log("encontrado")
// }

// const buscar = () => {
//     console.log("encontrado")
// }

//for of
alumnos.forEach(function(alum){console.log(alum)})

// alumnos.forEach((alum) => {
//     console.log(alum)
// })

let saludos = alumnos.map(function(nomb){
    return `Hola ${nomb}`
})

// let saludos = alumnos.map(nomb => `Hola ${nomb}`)

console.log(saludos)

let notas = [10, 20, 15, 17, 11, 13, 16]

let aprobados = notas.filter(function(nota){
    return nota >= 13
})

console.log(aprobados)

let existeAlumno = alumnos.includes("Adnner") //booleano

console.log(existeAlumno)

let peliculasGenero = peliculas.filter(function(peli){
    return peli.genre_ids.includes(18)
})

console.log(peliculasGenero)