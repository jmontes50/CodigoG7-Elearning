class Animal {
    Nombre;
    Edad;
    Familia;
    Tamanio;

    constructor(nombre, edad, familia, tamanio){
        this.Nombre = nombre;
        this.Edad = edad;
        this.Familia = familia;
        this.Tamanio = tamanio;
    }

    correr(velocidad){
        console.log(`${this.Nombre} corre a ${velocidad} m/s`)
    }
}

let panda = new Animal("Panda", 20, "Mamiferos", "Muy Grande")

console.log(panda)

//nombre, tamanio, edad, familia, SALTAR
//con extends heredamos las propiedades de una clase de mayor jerarquia
class Roedor extends Animal {
    constructor(nombre, edad, familia, tamanio, salto){
        //super me permite acceder al constructor de la clase Padre
        //lo único que tiene que respetarse es el orden de los parámetros del constructor de la clase padre
        super(nombre, edad, familia, tamanio)

        this.Salto = salto;
    }
}

let bugs = new Roedor("Bugs Bunny", 10, "hervivoro", "Chiquito", 40)

console.log(bugs)

class Conejo extends Roedor {
    //nombre, edad, familia, tamanio, salto, mastica
    constructor(nombre, edad, familia, tamanio, salto, mastica){
        super(nombre, edad, familia, tamanio, salto)

        this.Mastica = mastica
    }
}

let Lola = new Conejo("Lola Bunny", 10, "lepórido", "Chiquita", 50, "mucho")

console.log(Lola)