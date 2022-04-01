let edad = Number(prompt("Cuál es tu edad?"));

//que según la edad vamos a indicar que chequeos médicos necesitaria una persona

if (edad >= 70) {
    console.log("Haz un chequeo general");
} else if (edad <= 69 && edad >= 45) {
    console.log("Anda donde un@ cardiólog@, urólog@, y traumatolog@");
} else if (edad <= 39 && edad >= 18) {
    console.log("Visita a un@ psicolog@");
} else if (edad === 15 || edad === 12) {
    console.log("Visita a un@ infectolog@");
} else {
    console.log("Anda a un pediatra");
}
