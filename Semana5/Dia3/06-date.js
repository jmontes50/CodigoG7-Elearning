//JS tiene objetos para manejar varias cosas
//Date manejar fechas
let hoy = new Date();

console.log(hoy);
console.log(typeof hoy);

//Obtenemos el año
console.log(hoy.getFullYear());

//Obtenemos el mes, Enero es 0 y Diciembre es 11
console.log(hoy.getMonth());

//Día
console.log(hoy.getDate());

//ISO AÑO MES DIA
let navidad = new Date(2022, 11, 25);

console.log(navidad);

//getTime() me devuelve el timestamp
//cuantos milisegundos a pasado desde el 1 de enero de 1970
console.log(navidad.getTime());

let hastaNavidad = navidad - hoy;

console.log("hasta Navidad", hastaNavidad);

let diasParaNavidad = hastaNavidad / 1000 / 60 / 60 / 24;

console.log(diasParaNavidad);
