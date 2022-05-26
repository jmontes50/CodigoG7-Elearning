var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//influye
//función
function decorador(nuevoNombre) {
    // console.log("Yo soy el decorador")
    return function (target) {
        target.prototype.presentarse = function () {
            console.log(`Buenas Tardes ${nuevoNombre}`);
            target.vestimenta = ["vestido", "sombrero"];
            target.vestimenta.forEach(prenda => console.log(prenda));
        };
    };
}
//al momento de utilizar tiene que ir si o si encima de la clase y con un @ al inicio
let Persona = class Persona {
    constructor(nombre, ropa) {
        this.nombre = nombre;
        this.vestimenta = ropa;
    }
    presentarse() {
        console.log(`Hola soy ${this.nombre}`);
        this.vestimenta.forEach((prenda) => {
            console.log(prenda);
        });
    }
};
Persona = __decorate([
    decorador("Nohemi Código")
], Persona);
let persona1 = new Persona("Nohemi", ["Jeans", "Blusa"]);
persona1.presentarse();
