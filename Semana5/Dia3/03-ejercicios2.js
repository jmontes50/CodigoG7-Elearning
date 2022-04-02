/**
Uná clínica al hacer consultas va a justando los precios:
	las 3 primeras consultas cuestan 150 c/u
	las 2 siguientes cuestan 120 c/u
	las 2 siguientes cuestan 100 c/u
	y las restantes después de estas cuestan 60 c/u

Se requiere saber:
a) Cuanto pagará el paciente por todas sus citas realizadas
 */

//Segunda situación, el paciente va cita por cita;

//cita 1,2,3 = 150
//cita 4,5 = 120
//cita 6,7 = 100
// cita 8 a más = 60

let costoTotal = 0;
let contCitas = 1;
let sano = false;

let pregunta;

do {
    pregunta = confirm("Desea solicitar una cita?");
    if (pregunta === true) {
        console.log(contCitas);
        if (contCitas >= 1 && contCitas <= 3) {
            costoTotal = costoTotal + 150;
        } else if (contCitas <= 5) {
            costoTotal = costoTotal + 120;
        } else if (contCitas <= 7) {
            costoTotal = costoTotal + 100;
        } else {
            costoTotal = costoTotal + 60;
        }
        // después del if
        contCitas++;
        console.log(costoTotal);
    } else {
        sano = true;
    }
} while (sano === false);
