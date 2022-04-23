// const traerDatos = () => {
//     return new Promise ((resolve, reject) => {
//         resolve("Datos Obtenidos")
//     })
// }

const traerDatos = async () => {
//   return "Data Obtenida"; //resolve - bien
  throw "Error al obtener los datos" //reject - mal
};

// traerDatos()
// .then((rpta) => {
//     console.log(rpta)
// })
// .catch((error) => {
//     console.log(error)
// })

const traerInfoUsuario = async () => {
  return "Info Usuario"; //resolve - bien
//   throw "Error al obtener los datos" //
};

const validarUsuario = async () => {
  return "Usuario Validado"; //resolve - bien
  // throw "Error al obtener los datos" //reject - mal
};

const pedirDatos = async () => {
  //await = Wait Chepiiiii, espera, esto es asíncrono
  try {
    //ejecuta este bloque de codigo y si todo va bien dame el resultado .then() / return / resolve
    let rpta = 
     traerDatos();
    console.log(rpta);
    let rptaUsuario = await traerInfoUsuario();
    console.log(rptaUsuario);
    let rptaValidar = await validarUsuario();
    console.log(rptaValidar);
  } catch (errorcito) {
    //.catch() //throw / reject
    console.log(errorcito);
  }
};
pedirDatos();
