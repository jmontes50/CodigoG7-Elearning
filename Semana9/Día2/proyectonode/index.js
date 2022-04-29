// console.log("Hola Mundo!");
// import axios from "axios"
//cuando nosotros instalamos algo dentro de los node_modules, se puede llamar directamente
const axios = require("axios");

//axios.metodo_http
//axios.get
//axios.post
//axios.put
//axios.delete
axios.get("https://62636b83c430dc560d2ebb2a.mockapi.io/productos")
.then((rpta) => {
    // console.log(rpta)
    console.log(rpta.data)
})
.catch((error) => {
    console.log(error)
})