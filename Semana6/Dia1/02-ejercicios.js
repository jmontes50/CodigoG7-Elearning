let peliculas = [
    {
      nombrePelicula:"Blade Runner",
      anio:1982,
      director:"Ridley Scott",
      genero:"Ciencia Ficción"
    },
    {
      nombrePelicula:"Parasite",
      anio:2019,
      director:"Bong Joon-ho",
      genero:"Drama"
    },
    {
      nombrePelicula:"El Padrino",
      anio:1972,
      director:"Francis Ford Coppola",
      genero:"Drama"
    }
  ]

//   for(let i = 0; i < peliculas.length; i ++){
//       console.log(`La película ${peliculas[i].nombrePelicula} del año ${peliculas[i].anio} fue dirigida por ${peliculas[i].director}`)
//   }

/**
La tienda de Juegos ELDOTERO ofrece a sus clientes una variedad de juegos pero requiere un algoritmo que pregunte por el presupuesto del usuario y según el presupuesto le permita seleccionar juegos
 */

let arrJuegos = [
    {
      nombre:"Halo",
      precio:35
    },
    {
      nombre:"Outer Wilds",
      precio:24
    },
    {
      nombre:"Civilization V",
      precio:90
    },
    {
      nombre:"Stardew Valley",
      precio:30
    },
    {
      nombre:"The Witcher 3",
      precio:40
    },
    {
      nombre:"Portal",
      precio:5
    }
  ]
//el presupuesto
  let presupuesto = +prompt("Cuanto piensa invertir??");

//recorrer el arreglo de objetos para preguntar si es comprable

let juegosAComprar = []

for(let i = 0; i < arrJuegos.length; i++){
    if(presupuesto < arrJuegos[i].precio){
        //hace que se salte una iteración
        continue;
    }
    //Si es que hay presupuesto, le muestro una ventana de confirmación
    let compra = confirm(`Deseas comprar ${arrJuegos[i].nombre}, cuesta S/ ${arrJuegos[i].precio}`)

    if(compra === true){
        juegosAComprar.push(arrJuegos[i])
        //estos dos de abajo son igualitos
        presupuesto = presupuesto - arrJuegos[i].precio
        // presupuesto -= arrJuegos[i].precio
    }

}

console.table(juegosAComprar)
console.log(`Su vuelto es : S/ ${presupuesto}`)