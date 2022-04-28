//Tareitas
/**
1. Obtener los datos, mockapi a proveer los datos
1.1 Esos datos estan en el formato o estructura que necesitO (MOCKAPI, guarda un JSON)
2. Convertir esos datos e insertarlos en el HTML
 */

import { getProducts, createProduct } from "./productoService.js";
import { drawProducts } from "./interfaz.js";
//necesitamos tres referencias, 01 para el botón para escuchar el click!
//para el modal para transformarlo en un modal de bootstrap
//Y la tercera para el formulario
const btnCrear = document.getElementById("btnCrear");
const modalCrear = document.getElementById("modalCrear");
const bsModalCrear = new bootstrap.Modal(modalCrear);
const formCrear = document.getElementById("formCrear")

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

btnCrear.addEventListener("click", () => {
    bsModalCrear.show() //muestra
})

//vamos a indicar que la función que va a ejecutar el submit va a ser asincrona porque tenemos que esperar la 
//respuesta del fetch
formCrear.addEventListener("submit", async (e) => {
    //e = evento, preventDefault
    e.preventDefault();
    //obtener los valores de los input
    // console.log(formCrear.prod_name.value)
    const newProduct = {
        prod_name: formCrear.prod_name.value,
        prod_desc:formCrear.prod_desc.value,
        prod_price:formCrear.prod_price.value,
    }
    // console.log(newProduct)
    try {
        //tuvimos éxito, GO O NO GO?  dijimos GO
        await createProduct(newProduct)
        formCrear.reset() //limpia los input
        bsModalCrear.hide() //escondemos el modal
        obtainProducts() //obtenemos una actualización de los productos
        //si llamamos sin el await, lo ejecuta pero no capturaremos ninguna respuesta de esa función
        Swal.fire({
            icon:'success',
            title:'Éxito!',
            text:'Producto Creado'
        })
    } catch (error) {
        alert("Hubo un error al crear!")
    }
})