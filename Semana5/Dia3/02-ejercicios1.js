/**
Uná clínica al hacer consultas va a justando los precios:
	las 3 primeras consultas cuestan 150 c/u
	las 2 siguientes cuestan 120 c/u
	las 2 siguientes cuestan 100 c/u
	y las restantes después de estas cuestan 60 c/u

Se requiere saber:
a) Cuanto pagará el paciente por todas sus citas realizadas
 */

//Primera situación, conocemos cuantas citas en total tiene el paciente.

//cita 1,2,3 = 150
//cita 4,5 = 120
//cita 6,7 = 100
// cita 8 a más = 60

let cantidadCitas = Number(prompt("cuantas citas tuvo?"));

let pagoTotal = 0;

for (let i = 1; i <= cantidadCitas; i++) {
    // if(i <= 3){
    if (i >= 1 && i <= 3) {
        pagoTotal = pagoTotal + 150;
    } else if (i <= 5) {
        pagoTotal = pagoTotal + 120;
    } else if (i <= 7) {
        pagoTotal = pagoTotal + 100;
    } else {
        pagoTotal = pagoTotal + 60;
    }
}

console.log(`El total a pagar es: ${pagoTotal}`);

/**
let citas = +prompt("ingrese numero de citas")

let cost = 0

if(citas<=3){
    cost = citas*150
}else if(citas <= 5){
    cost = 450 + (citas-3)*120
}else if(citas <= 7){
    cost = 450 + 240 + (citas-5)*100
}else{
    cost = 450 + 240 + 200 + (citas-7)*60
}

console.log(cost)
 */
