let formulario = document.getElementById("formulario")
let tareasguardadas = document.getElementById("tareasguardadas")

formulario.addEventListener("submit", function(ev){
    ev.preventDefault()
    //formulario["name_del_input"].value me da el valor dentro del input
    console.log(formulario["tareanueva"].value)
    let nuevaTarea = document.createElement("p")
    nuevaTarea.innerHTML = formulario["tareanueva"].value
    tareasguardadas.appendChild(nuevaTarea)
})