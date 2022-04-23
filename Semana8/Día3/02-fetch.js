//fetch me permite hacer peticiones utilizando promesas

// fetch("https://reqres.in/api/users?page=2")
//Por defecto hace una petición GET - Obtener
fetch("https://62636b83c430dc560d2ebb2a.mockapi.io/productos")
.then((respuesta) => {
    // console.log(respuesta)
    //FETCH YA ME INTEGRA UNA MANERA DE OBTENER EL JSON Convertido
    return respuesta.json() //ya me hace el parse
})
.then((datos) => {
    // console.log(datos)
})

//indicar la información del producto a crear
let newProduct = {
    prod_name:"Guantes",
    prod_desc:"Guantes tejido a mano",
    prod_image:"https://i.ytimg.com/vi/wdFt9zH4MqE/maxresdefault.jpg",
    prod_price: 40,
}

//configurar nuestra petición
let configuracion = {
    //method: método HTTP- GET, POST, PUT DELETE
    'method': 'POST',
    //El tipo de contenido que estamos enviando, JSON, BIN, Text
    'headers':{
        'Content-Type': "application/json",
    },
    //body, ya es la data a enviar
    'body': JSON.stringify(newProduct)
}
//fetch(url_endpoint, configuracion)
fetch("https://62636b83c430dc560d2ebb2a.mockapi.io/productos", configuracion)
.then((response) => {
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(data)
})