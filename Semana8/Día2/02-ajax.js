let cartero = new XMLHttpRequest();

// console.log(cartero)

const pedirDatos = (tareaFinal) => {
  //este evento me va a indicar el estado de mi peticion
  cartero.addEventListener("readystatechange", () => {
    //readyState me va a indicar el estado de mi petición
    //mandar una carta o hacer un pedido de amazon - aliexpress

    console.log("viendo readyState", cartero.readyState);

    if (cartero.readyState === 4) {
      console.log(cartero.responseText);
      tareaFinal(cartero.responseText)
    }
  });
  //configurando mi carta, a que destino
  cartero.open("GET", "https://reqres.in/api/users?page=2");
  //la estoy mandando
  cartero.send();
};

pedirDatos((datos) => {
    let datosConvertidos = JSON.parse(datos)
    console.log(datosConvertidos)
})