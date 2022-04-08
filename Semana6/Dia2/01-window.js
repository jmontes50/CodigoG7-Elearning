//Todo viene de window
//No es necesario referencia a window
window.console.log("Hola!")

console.log(typeof window)

console.log(window)

console.log(`Info del navegador ${window.navigator.userAgent}`)

navigator.geolocation.getCurrentPosition(function(infoUbicacion){
    console.log(infoUbicacion)
    console.log(`Tu latitud es ${infoUbicacion.coords.latitude}`)
})

console.log(window.document)

console.log(typeof document)

let body =  document.querySelector("body")

body.innerHTML = "<h1>Título</h1>"