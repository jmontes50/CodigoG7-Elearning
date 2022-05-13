import { storage } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid"

//creamos una función que devuelva una promesa porque subir un archivo demora es una tarea asíncrona
//recibimos el archivo para subir
const subirArchivo = (archivo) => {
    return new Promise ((resolve, reject) => {
        //crear una referencia de donde y con que nombre vamos a guardar el archivo
        const extension = archivo.type.split("/")[1]
        // console.log({extension})
        const nombreUUID = v4()
        // console.log({nombreUUID})
        const referenciaStorage = ref(storage, `fotos/${nombreUUID}.${extension}`)
        //creamos una referencia a la tarea de subida del archivo que se ejecuta mediante 
        //uploadBytesResumable(refStorage, archivo_que_va_a_subir)
        const tareaSubida = uploadBytesResumable(referenciaStorage, archivo);
        //.on es una especie de Listener que va a escuchar al evento 'state_changed' con el objetivo de supervisar la subida, si es que hay un error y el fin de la subida mediante 03 callbacks
        tareaSubida.on('state_changed',
            //supervisar la subida del archivo
            () => {},
            //en caso de error al subir
            (error) => {reject(error)},
            //cuando ya finalizo la subida del archivo
            () => {
                getDownloadURL(referenciaStorage)
                .then((url) => {
                    resolve(url)
                })
            }
        )
    })
}

export {
    subirArchivo
}

