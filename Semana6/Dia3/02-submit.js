let formulario = document.getElementById("formulario")
let tareasguardadas = document.getElementById("tareasguardadas")

let porHacer = [] //para indicar aquí las tareas que tengo por hacer

formulario.addEventListener("submit", function(ev){
    ev.preventDefault()
    //formulario["name_del_input"].value me da el valor dentro del input
    // console.log(formulario["tareanueva"].value)
    agregarTarea(formulario["tareanueva"].value)
})

//Un solo bloque se encargue de una sola cosa

function agregarTarea (tarea) {
    porHacer.push(tarea)
    let nuevaTarea = document.createElement("p")
    nuevaTarea.innerHTML = tarea
    tareasguardadas.appendChild(nuevaTarea)
    guardarEnLS()
}

function guardarEnLS () {
    /** 
     * 
     * //localStorage solamente guarda texto
    // localStorage.setItem("nombre",valor)
    let fecha = {dia:08, mes:04}
    let fechaConvertida = JSON.stringify(fecha)
    console.log(fechaConvertida)
    */
    let porHacerConvertido = JSON.stringify(porHacer)
    // console.log(porHacerConvertido)
    localStorage.setItem("tareasPorHacer", porHacerConvertido)
}

function leerLS () {
    //localStorage.getItem("nombre_de_lo_guardado")
    let tareasDelLS = localStorage.getItem("tareasPorHacer")
    // console.log(tareasDelLS)
    //JSON.parse(string)
    //convierte de texto a JS
    let porHacerReConvertido = JSON.parse(tareasDelLS)
    console.log(porHacerReConvertido)
}
leerLS()