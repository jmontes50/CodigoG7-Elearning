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