//influye
//función
function decorador (nuevoNombre:string) {
    // console.log("Yo soy el decorador")
    return function(target){//target es el objetivo a decorar
        target.prototype.presentarse = function(){
            console.log(`Buenas Tardes ${nuevoNombre}`)
            target.vestimenta = ["vestido", "sombrero"]
            target.vestimenta.forEach(prenda => console.log(prenda))
        }
    }
}
//al momento de utilizar tiene que ir si o si encima de la clase y con un @ al inicio
@decorador("Nohemi Código")
class Persona {
    nombre:string
    vestimenta:Array<string>

    constructor(nombre, ropa){
        this.nombre = nombre
        this.vestimenta = ropa
    }

    presentarse():void{
        console.log(`Hola soy ${this.nombre}`);
        this.vestimenta.forEach((prenda) => {
            console.log(prenda)
        })
    }
}

let persona1 = new Persona("Nohemi", ["Jeans","Blusa"])

persona1.presentarse()