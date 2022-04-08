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

