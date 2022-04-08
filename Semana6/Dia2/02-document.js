/**
 Document es un objeto que me va a permitir modificar el DOM
*/
//Quiero obtener un elem por su ID
let titulo = document.getElementById("titulo")

console.log("Revisando Elem", titulo)

//innerHTML es una propiedad que me permite cambiar el HTML interno de un elem
titulo.innerHTML = "<i>Nuevo Título</i>"

//nomenclatura Varibles
//elem.style.propiedad = "valorPropiedadCSS"
//snake-case --> camelCase
titulo.style.color = "red";
titulo.style.padding = "20px";
titulo.style.backgroundColor= "blue";
titulo.style.borderRadius = "10px";
titulo.style.textAlign = "center";

//Selector de CSS
let subtitulo  = document.querySelector(".subtitulo");

console.log(subtitulo);

subtitulo.style.border = "4px solid #4c4c4c";

let main  = document.querySelector("main");

main.style.backgroundColor = "lightblue";

let listaItems = document.querySelectorAll(".li_item");

console.log(listaItems);

listaItems.forEach(function(liItem){
    liItem.style.fontFamily = "Arial";
    liItem.style.color = "purple"
})

let divContenido = document.getElementById("contenido")

// si llamamos a un elemento antes de que exista, no lo va a encontrar
// let miParrafo = document.getElementById("parrafo")

// console.log(miParrafo)

//el backtick me permite poner comillas dentro
divContenido.innerHTML = `<p id="parrafo">
                                Arriba Perú
                            </p>
                            <div>
                                Segundo Párrafo
                            </div>`;

//document.createElement("elem")
//elem => p , div , h1
//Me permite crear un elemento(obj) sin agregar al HTML
let divAlerta = document.createElement("div")

console.log(divAlerta);

divAlerta.innerHTML = "El Repechaje es el 13 de Junio";

//añade un elemento como hijo de otro elemento
divContenido.appendChild(divAlerta)

divAlerta.style.color = "red";

let preguntar = confirm("Deseas apoyar a la selección")

if(preguntar === true){
    let divApoyo = document.createElement("div")
    divApoyo.innerHTML = "Vamoooos Perú!!!!"
    divContenido.appendChild(divApoyo)
}

let imagen = document.createElement("img");

//setAtribute("nombre_attr","valor_attr")
imagen.setAttribute("src", "https://pbs.twimg.com/media/EvgxLWgXUAYzZlB.jpg")
imagen.setAttribute("alt", "recordatorio de nomenclatura en variables")
imagen.style.width = "400px"

divContenido.appendChild(imagen)

let seleccion = [
    "Cuevita",
    "Lapagol",
    "Oreja",
    "Carrillo",
    "El cóndor Mendoza",
    "San Gallese"
]

seleccion.forEach(function(player){
    console.log("mostrando player:", player)
    //creo un elemento párrafo p
    let pJugador = document.createElement("p")
    //le rellenamos el HTML con el nombre del jugador
    pJugador.innerHTML = player
    console.log(pJugador)
    //lo agregamos como hijo de divContenido
    divContenido.appendChild(pJugador)
})

console.log(divContenido)

let p5 = document.querySelector("#contenido > p:nth-of-type(5)");

console.log("P5",p5)

let entrenador = document.createElement("p")

entrenador.innerHTML = "Gareca";

divContenido.insertAdjacentElement('afterend', p5)