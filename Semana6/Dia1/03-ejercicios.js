// console.log(peliculas)

function peliculasPorIdioma (idioma) {
    let pelisSeleccionadas = []
    
    for(let i = 0; i < peliculas.length; i++){
        if(peliculas[i].original_language === idioma){
            pelisSeleccionadas.push(peliculas[i])
        }
    }

    //después de que el for termine
    return pelisSeleccionadas;
}

let pelis = peliculasPorIdioma("en")
console.log(pelis)

//RETO
//realicen una función que reciba una variable nombreGenero y me muestre las peliculas de ese genero

//TIPS
//Busquen el id del genero primero y asignen su valor a una variable

//busquen en cada película con ese id