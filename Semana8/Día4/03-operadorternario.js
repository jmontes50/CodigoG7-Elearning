//truthy - falsy

let teQuiere = true
//No es requerido evaluar utilizando un operador lógico
if(teQuiere){
    console.log('Es verdadero')
}

let valor = null;
//si tenemos algo que sea undefined o null, se considerará como falso
if(valor){
    console.log("Esta definido")
}else{
    console.log("No esta definido")
}

//operador ternario
//condicional ? si_es_verdadero : si_no_es_verdadero
valor ? console.log("SI ESTA DEFINIDO") : console.log("NO ESTA DEFINIDO")