//Tareitas
/**
1. Obtener los datos, mockapi a proveer los datos
1.1 Esos datos estan en el formato o estructura que necesitO (MOCKAPI, guarda un JSON)
2. Convertir esos datos e insertarlos en el HTML
 */

import { getProducts } from "./productoService.js";
import { drawProducts } from "./interfaz.js";

const obtainProducts = async () => {
    try {
        //obtiene los productos
        const products = await getProducts() //get Productos trabaja con promesas
        console.log({products})
        // console.log({products:products})
        // console.table(products)
        //los dibuja
        drawProducts(products)
    } catch (error) {
        alert("mensaje ocurrio un error al obtener la data")
    }
}

obtainProducts();