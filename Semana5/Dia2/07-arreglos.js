//para definir arreglos tengo que utilizar []
//posiciones o índices, que van a comenzar desde 0

let nombres = ["Rosita", "Raúl", "Pedro", "Pamela", "Jenny", "Elba"];

console.log(nombres[1]);
console.log(nombres[4]);
console.log(nombres[2]);

console.log(`Los alumnos son ${nombres[0]} ${nombres[3]} ${nombres[5]}`);

//length = longitud, la cantidad de items que tiene mi arreglo
console.log(nombres.length);

nombres.push("Felipe");

console.table(nombres);

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
