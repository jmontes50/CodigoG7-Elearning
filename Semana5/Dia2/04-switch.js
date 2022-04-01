let numeroMes = Number(prompt("Ingrese el número del mes"));

switch (numeroMes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    default:
        //en caso no aplique ningún caso se ejecuta el default = else
        console.log("Mes no encontrado");
}
