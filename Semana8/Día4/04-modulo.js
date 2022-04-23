let url = "https://google.com";

let array = ["user1","user2","user3"]

const sum = (a, b) => {
    return a + b;
}

export {
    url,
    array,
    //oye vamos a exportar esto por defecto, le estamos dando una prioridad
    sum as default
}