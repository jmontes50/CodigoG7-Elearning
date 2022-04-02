let gato = {
    nombre: "Tornillo",
    color: "Blanco",
    edad: 4,
    raza: "Angora",
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
