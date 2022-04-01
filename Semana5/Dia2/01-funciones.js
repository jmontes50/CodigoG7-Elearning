let numero = 2; //ámbito global, lo puedo referenciar desde cualquier parte

// let area = 0;

function calcularAreaTriangulo(base, altura) {
    //ámbito local, solo existe dentro de está función
    let area = (base * altura) / numero;

    return area; //es el resultado devuelto/entregado
}

let resultado = calcularAreaTriangulo(10, 15);

console.log(resultado);

let resultado2 = calcularAreaTriangulo(100, 50);

console.log(calcularAreaTriangulo(25, 45));

console.log(resultado2);

//una función no es obligatorio que reciba parámetros
//tampoco es obligatorio que retorne algo
function saludar() {
    console.log("Hola!");
}

saludar();

console.log(area);
