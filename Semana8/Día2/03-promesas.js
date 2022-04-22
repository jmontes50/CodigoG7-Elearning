const hornearTorta = () => {
    //el horneado demora
    //el horneado puede ir bien -> resolve
    //puede ir mal -> reject
    return new Promise((resolve, reject) => {
        //aqui adentro va la tarea que demore
        setTimeout(() => {
            if(false){
                resolve("La torta esta Lista!")
            }else{
                reject("La torta se quemo")
            }
        }, 5000)
    })
}
// console.log(hornearTorta())

// then se ejecuta si fue bien
hornearTorta()
.then((resultado) => { // bien
    console.log(resultado)
})
.catch((error) => { //mal
    console.log(error)
})