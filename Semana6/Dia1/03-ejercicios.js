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
// console.log(pelis)

//RETO
//realicen una función que reciba una variable nombreGenero y me muestre las peliculas de ese genero

//TIPS
//Busquen el id del genero primero y asignen su valor a una variable

//busquen en cada película con ese id

/** 

function peliculasPorGenero (nombreGenero) {
    let generoEncontrado = 0;

    let peliculasEncontradas = [];

    for(let i = 0; i < generos.length; i++){
        if(generos[i].name === nombreGenero){
            generoEncontrado = generos[i].id
            break;
        }
    }

    for(let j = 0; j < peliculas.length; j++){
        for(let k = 0; k < peliculas[j].genre_ids.length; k++){
            if(peliculas[j].genre_ids[k] === generoEncontrado ){
                peliculasEncontradas.push(peliculas[j])
            }
        }
    }

    return peliculasEncontradas;
}

let pelisPorGenero = peliculasPorGenero("Drama")

console.log(pelisPorGenero)

*/

function peliculasPorGenero (nombreGenero) {
    let generoEncontrado = 0;

    let peliculasEncontradas = [];

    for(let genero of generos){
        if(genero.name === nombreGenero){
            generoEncontrado = genero.id
        }
    }

    console.log(generoEncontrado)

    for(let peli of peliculas){
        for(let idGenero of peli.genre_ids){
            if(idGenero === generoEncontrado){
                // console.log(peli)
                peliculasEncontradas.push(peli)
            }
        }
    }

    return peliculasEncontradas
}

console.table(peliculasPorGenero("Drama"))