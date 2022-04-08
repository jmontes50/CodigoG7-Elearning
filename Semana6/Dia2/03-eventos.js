let boton = document.querySelector("#boton");
let divContenido = document.getElementById("contenido")

//elemento.addEventListener("evento", function(){})
boton.addEventListener("click", function(){
    alert("Hola! me diste click!")
});

let caja = document.createElement("div")

caja.style.width = "200px"
caja.style.height = "200px"
caja.style.backgroundColor = "rebeccapurple"
caja.style.border = "2px solid orangered"

divContenido.appendChild(caja)

caja.addEventListener("mouseover", function(){
    console.log("Pasaste por encima")
})

let seriesTV = [
    "La casa de papel",
    "Mr. Robot",
    "Demon Slayer",
    "The office",
    "Grey's Anatomy",
    "Breaking Bad",
    "GOT",
    "Euphoria",
    "Killing Eve",
    "Prison Break",
    "Halo",
    "MoonKnight",
    "El código de la discordia"
]

seriesTV.forEach(function(serie){
    let nuevoParrafo = document.createElement("p")
    console.log(serie)
    nuevoParrafo.innerHTML = serie
    divContenido.appendChild(nuevoParrafo)

    //aparte de agregar nuevoParrafo al DOM, le añadimos un listener que escuche si al elemento se le ha hecho doble click
    nuevoParrafo.addEventListener("dblclick", function(){
        alert(`Has escogido ${serie}`)
    })
})
