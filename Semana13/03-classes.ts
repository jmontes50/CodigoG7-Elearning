interface iHamburguesa {
    id:number,
    nombre:string,
    precio:number,
    ingredientes:Array<string>,
    preparacion:string
}

class Anvorguesa implements iHamburguesa{
    //propiedad publicas y privadas
    id;
    nombre;
    precio;
    ingredientes;
    preparacion;
    //el _ es necesario al indicar una _propiedad_privada
    private _costo;

    constructor(id, nombre, precio){
        this.id = id;//*
        this.nombre = nombre;//*
        this.precio = precio;//* obligatorio
        this.ingredientes = [];
        this.preparacion = "";
        this._costo = 90;
    }

    //getters y setters t=> obtenedores y configuradores
    //getters
    get obtenerCosto(){
        //validaciones, codigo extra
        return this._costo
    }

    //setter
    set actualizarCosto(nuevoCosto){
        //codigo extra
        this._costo = nuevoCosto
    }
}

let Cangreburguer = new Anvorguesa(1, "CangreBurguer", 12)

Cangreburguer.actualizarCosto = 20

console.log(Cangreburguer)

//Si desean cambiar la versión de Ecmascript al transpilar
//tsc nombrearchivo.ts --target ES6