//import {lo_que_deseemos_importar} from ubicacion
import suma, {url, array} from "./04-modulo.js"


console.log(url)

array.forEach((item) => {
    console.log(item)
})

console.log(suma(10, 15))

//importamos todo:
//import * as Alias from ubicacion, OJO: No es muy recomendable
// import * as miModulo from "./04-modulo.js"

// console.log(miModulo.sum(4, 9))
// console.log(miModulo.url)