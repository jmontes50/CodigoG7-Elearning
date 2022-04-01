/**
for(contador; condicional; actualizador_del_contador){
	código que se va a repetir
}
 */
//n es un número
// a = a + n;
// a += n;

// for (let cont = 0; cont <= 10; cont = cont + 1) {
/** 
for (let cont = 0; cont <= 10; cont++) {
    console.log(`el contador es ${cont}`);
}
*/

/**
Un chico está ahorrando sus propinas para comprarse una PS5,
cada mes el chico recibirá una propina diferente, preguntar
 */

let precioPs5 = 3000;

let ahorro = 0;

let propina = 0;

for (ahorro = 5; ahorro <= 3000; ahorro = ahorro + propina) {
    propina = Number(prompt("Ingrese la propina"));
    console.log("PROPINA", propina);
    console.log("AHORRO", ahorro + propina);
}
//CUANDO SE TERMINE DE EJECUTAR EL FOR RECIÉN SE EJECUTARÁ LO QUE ESTÁ DESPUÉS
console.log("ESTOY DESPUÉS DEL FOR");
