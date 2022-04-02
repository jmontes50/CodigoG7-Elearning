let gato = {
    nombre: "Tornillo",
    color: "Blanco",
    edad: 4,
    ["raza"]: "Angora",
    ["color_ojos"]: "Azul",
    hobbies: ["dormir", "jugar con monedas", "comer pollo"],
    comer: function () {
        console.log("ñam miau ñam");
    },
};

//nombre_objeto.nombre_propiedad
console.log(gato.nombre);

console.log(gato.edad);

//nombre_objeto["nombre_propiedad"]
console.log(gato["raza"]);

console.log(gato.color_ojos);

console.log(gato.hobbies[1]);

gato.comer();
/** 
function devuelveValor(arrProps) {
    // return gato[prop];
    let arrTemp = [];
    for (let i = 0; i < arrProps.length; i++) {
        arrTemp.push(gato[arrProps[i]]);
    }
    return arrTemp;
}

console.log("F", devuelveValor(["nombre", "edad", "color"]));
*/

let albumMusical = {
    nombre: "Labour of Love",
    fechaLanzamiento: "01/10/1983",
    genero: ["Reggae", "Indie"],
    canciones: [
        {
            titulo: "Red Red Wine",
            autor: ["Neil Diamond", "UB40"],
            duracion: null,
        },
        {
            titulo: "Cherry Oh Baby",
            autor: ["UB40"],
            duracion: 3.18,
        },
    ],
};

console.log(albumMusical.canciones[0].autor[0]);

// console.log(albumMusical.canciones[0].duracion + 10);

if (albumMusical.canciones[0].duracion === null) {
    console.log("NO EXISTE!");
}
