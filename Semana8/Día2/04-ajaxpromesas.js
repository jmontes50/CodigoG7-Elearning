let cartero = new XMLHttpRequest();

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    cartero.addEventListener("readystatechange", () => {
        console.log("viendo readyState", cartero.readyState);
        if (cartero.readyState === 4) {
        //   console.log(cartero.responseText);
          resolve(cartero.responseText)
        }
      });
  
      cartero.open("GET", "https://reqres.in/api/users?page=2");
      //la estoy mandando
      cartero.send();
  });
};

// pedirDatos((datos) => {
//   let datosConvertidos = JSON.parse(datos);
//   console.log(datosConvertidos);
// });

pedirDatos()
.then((resultado) => {
    console.log(JSON.parse(resultado))
})