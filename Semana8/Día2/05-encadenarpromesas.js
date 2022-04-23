const hornearTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve("Torta Horneada")
            }else{
                reject("Torta Quemada")
            }
        }, 5000)
    })
}

const prepararGlaseado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false){
                resolve("Glaseado Listo")
            }else{
                reject("Quemamos el microondas")
            }
        }, 3000)
    })
}

const cubrirTorta = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve("Torta Cubierta")
            }else{
                reject("Ya fue la torta")
            }
        }, 3000)
    })
}

hornearTorta()
.then((tortaLista) => {
    console.log(tortaLista)
    //despues de tener exito en la primera promesa
    //retorne la funcion con la 2da promesa
    return prepararGlaseado()
})
.then((glaseado) => {
    console.log(glaseado)
    return cubrirTorta()
})
.then((tortaPreparada) => {
    console.log(tortaPreparada)
})
.catch((tortaArruinada) => {
    console.log(tortaArruinada)
    console.log("Pide Rappi")
})