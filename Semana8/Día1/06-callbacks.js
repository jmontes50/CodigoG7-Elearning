const buscarAlumno = (nombre, callback) => {
    setTimeout(() => {
        console.log(1)
        console.log(2)
        console.log(3)
        console.log(4)
        callback("hehe Hola")
    }, 4000)
}

buscarAlumno("Javier", (texto) => {
    console.log(`Yo soy el callback ${texto}`)
})