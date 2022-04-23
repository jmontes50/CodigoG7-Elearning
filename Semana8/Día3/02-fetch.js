//fetch me permite hacer peticiones utilizando promesas

// fetch("https://reqres.in/api/users?page=2")
fetch("https://swapi.dev/api/people/1")
.then((respuesta) => {
    console.log(respuesta)
    //FETCH YA ME INTEGRA UNA MANERA DE OBTENER EL JSON Convertido
    return respuesta.json() //ya me hace el parse
})
.then((datos) => {
    console.log(datos)
})