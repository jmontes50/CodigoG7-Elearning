const alumnosDB = ["Alejandro","Javier","Camila","Diego","Mauro"]; //miles o decenas de miles, va a demorar

// function () {} ----> () => {}

const buscarAlumno = (nombre) => {
    let alumnoEncontrado = null;
    //estamos Simulando que la busqueda va a demorar
    setTimeout(() => {
        for(let i = 0; i < alumnosDB.length; i ++){
            if(alumnosDB[i] === nombre){
                alumnoEncontrado = true
            }
        }
        console.log("busqueda finalizada")
    }, 5000)

    return alumnoEncontrado;
}

console.log(buscarAlumno("Javier"))