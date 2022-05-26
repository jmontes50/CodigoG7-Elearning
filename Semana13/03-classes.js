class Anvorguesa {
    constructor(id, nombre, precio) {
        this.id = id; //*
        this.nombre = nombre; //*
        this.precio = precio; //* obligatorio
        this.ingredientes = [];
        this.preparacion = "";
        this._costo = 90;
    }
    //getters y setters t=> obtenedores y configuradores
    //getters
    get obtenerCosto() {
        //validaciones, codigo extra
        return this._costo;
    }
    //setter
    set actualizarCosto(nuevoCosto) {
        //codigo extra
        this._costo = nuevoCosto;
    }
}
let Cangreburguer = new Anvorguesa(1, "CangreBurguer", 12);
Cangreburguer.actualizarCosto = 20;
console.log(Cangreburguer);
