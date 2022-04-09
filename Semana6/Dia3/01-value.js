let divContenido = document.getElementById("contenido");

divContenido.innerHTML = `<h1>Eventos y value</h1>
                            <input 
                                type="text" 
                                id="input_nombre"
                            >`

let inputNombre = document.getElementById("input_nombre");
// let input = document.createElement("input")

inputNombre.setAttribute("placeholder","Ingrese su Nombre");

//input, select, textarea
//evento change
//element.addEventListener("evento",function(){})
inputNombre.addEventListener("change", function(evento){
    //recordemos que el evento también es un objeto
    //.target del evento, se refiere desde donde esta disparando el evento
    console.log(evento.target)
    console.log(evento.target.value)
})


