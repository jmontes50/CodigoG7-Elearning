let pikachu1 = {
    vida:20,
    fuerza:40,
    resistencia:30
}

let pikachuRojo = pikachu1;
//Spread Operator
//Spread = esparcir
//al hacer un spread operator ... estamos copíando el contenido de un objeto y asignandolo a una nueva variable
//... copia y pega
//pero le puedo añadir las propiedades que deseemos
// y podemos modificar propiedades ya existentes
let pikachuAzul = {...pikachu1, 
                    tipo:"RadioActivo",
                    resistencia:50
                    }

pikachuRojo.vida = 15;
console.table(pikachuRojo)

console.table(pikachu1)



console.log("Azul",pikachuAzul)