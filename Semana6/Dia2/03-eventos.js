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

let input = document.createElement("input")
//input.setAttribute("nombre_attr","valor_attr")
input.setAttribute("type","password")
divContenido.appendChild(input)

let btnVer = document.createElement("button")
btnVer.innerHTML = "mostrar password"
divContenido.appendChild(btnVer)

//flag - bandera
let esVisible = false;

btnVer.addEventListener("click", function(){
    //si te dijeron que era yo, yo no fui
    //negación NOT
    esVisible = !esVisible;

    if(esVisible === true){
        input.setAttribute("type","text")
    }else{
        input.setAttribute("type","password")
    }
})

let linkGoogle = document.createElement("a")
linkGoogle.innerHTML = "Vamo a google"
linkGoogle.setAttribute("href","https://google.com")
linkGoogle.setAttribute("target","_blank")
divContenido.appendChild(linkGoogle)

linkGoogle.addEventListener("click",function(evento){
    console.log(evento)
    //preventDefault(), previene la acción por defecto a ejecutar de un elemento
    evento.preventDefault()
    console.log("click!")
})