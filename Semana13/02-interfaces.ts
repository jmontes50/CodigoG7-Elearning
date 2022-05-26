//interface = contrato
interface iGatete {
    nombre:string,
    edad:number,
    colores:Array<string>,
    raza:string,
    tamanio:number,
    genero:string,
    bigotes?:boolean
}

let gatita:iGatete = {
    nombre:"Gatita",
    edad:7,
    colores:["Café","Blancos","Negros"],
    raza:"siamés",
    tamanio:5,
    genero:"femenino",
    bigotes:true
}