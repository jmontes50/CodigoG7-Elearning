var Anvorguesa = /** @class */ (function () {
    function Anvorguesa(id, nombre, precio) {
        this.id = id; //*
        this.nombre = nombre; //*
        this.precio = precio; //* obligatorio
        this.ingredientes = [];
        this.preparacion = "";
        this._costo = 90;
    }
    Object.defineProperty(Anvorguesa.prototype, "obtenerCosto", {
        //getters y setters t=> obtenedores y configuradores
        //getters
        get: function () {
            //validaciones, codigo extra
            return this._costo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anvorguesa.prototype, "actualizarCosto", {
        //setter
        set: function (nuevoCosto) {
            //codigo extra
            this._costo = nuevoCosto;
        },
        enumerable: false,
        configurable: true
    });
    return Anvorguesa;
}());
var Cangreburguer = new Anvorguesa(1, "CangreBurguer", 12);
Cangreburguer.actualizarCosto(20);
console.log(Cangreburguer);
