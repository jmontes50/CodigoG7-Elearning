let edad = Number(prompt("Cuál es tu edad?"));

console.log(typeof edad);
//if(condicion){instrucciones}
/** 
if (edad >= 18) {
    console.log("Puedes comprar tu entrada");
} else {
    //en caso no se cumpla la condicional, se ejecutará este bloque de código
    console.log("No puedes entrar");
}
*/

if (edad >= 40) {
    console.log("Si tienes 3 dosis, ingresa");
} else if (edad === 35) {
    console.log("Ganaste un premio, pero igual necesitas las 2 dosis");
} else if (edad >= 18) {
    console.log("Si tienes 2 dosis, ingresa");
} else if (edad >= 5) {
    console.log("Es recomendable que tenga al menos dos dosis");
} else {
    // cuando ninguna de las condiciones se ha cumplido
    console.log("debes ser un bebé pasa noma");
}
