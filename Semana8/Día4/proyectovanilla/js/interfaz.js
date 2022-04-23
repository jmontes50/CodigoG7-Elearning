//se va encargar de generar elementos dentro del DOM

const drawProducts = (arrProducts) => {
    const divProductos = document.getElementById("divProductos")

    let contentProducts = '' //guardar el html generado a partir de arrProducts
    //desestructuramos cada item que tenga arrProducts, por sus propiedades
    arrProducts.forEach(({id, prod_name, prod_desc, prod_price, prod_image}) => {
        //por c/item de arrProducts, creamos una card de bootstrap con la información
        let cardProduct = `
        <div class="col-lg-3 col-sm-12">
            <div class="card mb-3">
                <img src="${prod_image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">
                        ${prod_name}
                    </h5>
                    <p class="card-text">
                        ${prod_desc}
                    </p>
                    <p class="card-text">
                        S/ ${prod_price}
                    </p>
                    <button class="btn btn-primary" data-id="${id}">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
        `
        //Concatenando todo el HTML
        // contentProducts = contentProducts + cardProduct;
        contentProducts += cardProduct;
    })
    divProductos.innerHTML = contentProducts;
}
export {
    drawProducts
}