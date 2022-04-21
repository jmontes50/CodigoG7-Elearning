//class <Nombre_clase> {}
//el nombre de la clase debe iniciar con Mayúscula

class Pokemon {
    //0. definir que caracteristicas/propiedades va a tener mi clase
    //clase -> plano/plantilla
    //no es necesario poner let var ni nada
    Vida;
    Nombre;
    Habilidad;
    Poder;
    Tamanio;
    Tipo;
    //1. Constructor. Es un método que se ejecuta al inicio de instanciar mi clase
    //de construir el objeto
    constructor(nombre, habilidad, poder, tamanio, vida, tipo){
        //dentro del constructor vamos a construir el objeto
        //this va a hacer referencia al objeto que estemos construyendo
        this.Nombre = nombre;
        this.Habilidad = habilidad;
        this.Poder = poder;
        this.Tamanio = tamanio;
        this.Vida = vida;
        this.Tipo = tipo;
        this.aparecer()
    }

    //no necesito ponerles function ni na
    aparecer(){
        console.log(`Un ${this.Nombre} salvaje apareció!`)
    }
}

//Instancia -> new 
let ratonAmarillo = new Pokemon("Pikachu","Impact Trueno",60,20,30,"Eléctrico");

let lechuguita = new Pokemon("Bulbasaur","Latigo Cepa",55, 20, 40, "Vegetal");

console.table(ratonAmarillo);

console.table(lechuguita);

// lechuguita.aparecer()