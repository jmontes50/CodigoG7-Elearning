let alumnos = ["Javier", "Erika", "Nohemi", "Alex", "Diana"];

//algoritmo para que el usuario busque un nombre y si existe el nombre dentro de alumnos me muestre su posición/índice

let busqueda = prompt("Ingrese el nombre del alumnit@");

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
    if (busqueda === alumnos[i]) {
        console.log(`${busqueda} se encuentra en la posición ${i}`);
        //corta la iteración
        break;
    }
}

/** 
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        console.log({ i, j });
        if (j === 3) {
            break;
        }
    }
}
*/

let notas = [15, 18, 13, 12, 9, 14, 20, 6, 0, 10];

//sepa que notas son las aprobatorias
//porque quiero hacer un proceso de matricula
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 13) {
        continue;
    }
    console.log(notas[i]);
    //el alumno esta al dia con sus pagos
    //tiene creditos suficientes
    //matricula
}
