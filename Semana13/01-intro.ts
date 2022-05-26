let saludo = "Hola Mundo!";

console.log(saludo);

//Tipado
//let nom_variable:tipo = valor
let texto:string = "ceviche";

let cantidad:number = 21

let teQuiere:boolean = true;

let regalos:Array<string> = ["Flores","Chocolates","Osito","PS5"];

let random:any = undefined //básicamente cualquier cosa

//tsc nombre.ts
//node nombre.js

//funciones

const sumar = (num1:number, num2:number):number => {
    return num1 + num2
}

console.log(sumar(6, 10))