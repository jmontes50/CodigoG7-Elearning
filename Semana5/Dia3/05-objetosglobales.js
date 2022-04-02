let nombre = "Osmar";

console.log(nombre.length);

let perro = {
    nombre: "Backus",
    edad: 14,
    ladra: function () {
        //método = función dentro de un obj
        console.log("guauguauguau");
    },
};

console.log(perro.edad);

let numero = 20;

let edad = new Number("31"); //llamando directamente a la fabrica de numeros y decirles, fabricame un numero 31

console.log(typeof edad);

console.log(edad + 5);

perro.ladra();

let arr = [1, 2, 3, 4, 5, 6];

arr.push(7);
