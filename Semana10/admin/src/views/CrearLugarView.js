import { useState, useEffect, useRef } from "react";
import { obtenerCategorias } from "../services/categoriasService";
import { crearLugar } from "../services/lugaresService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import { subirArchivo } from "../config/fireStorage"
import Cargando from "../components/Cargando"

let miArchivo = null;

export default function CrearLugarView() {
  const [inputs, setInputs] = useState({
    lug_nom: "",
    lug_desc: "",
    lug_dir: "",
    categoriaId: 1,
    lug_coords:[-12.018, -77.005]
  });
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false)

  const inputFile = useRef()

  const navigate = useNavigate();

  const manejarInputs = (e) => {
    console.log(e.target.name);
    setInputs({
      ...inputs, //spread operator de las propiedades de inputs
      //era segun el name que recibiamos a partir del evento,
      //le asignabamos el valor
      [e.target.name]: e.target.value,
    });
  };

  const manejarFile = (e) => {
    // console.log("manejar File", e.target.files[0])
    miArchivo = e.target.files[0]
  }

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading antes de ejecutar nuestras funciones para subir un archivo y crear u lugar
      setLoading(true)
      const archivoSubido = await subirArchivo(miArchivo)
      // console.log({archivoSubido})
      await crearLugar({...inputs, lug_img:archivoSubido});
      setLoading(false)
      Swal.fire({
        icon: "success",
        title: "Lugar creado!",
      });
      navigate("/lugares");
    } catch (error) {
      setLoading(false)
      //Swal
      console.log(error);
    }
  };

  const existeErrorInputs = () => {
    if (
      inputs.lug_nom.trim() === "" ||
      inputs.lug_desc.trim() === "" ||
      inputs.lug_dir.trim() === ""
    ) {
      //si alguno de los inputs quitandoles los espacios no tiene nada de texto retornare true
      //Si se ejecuta un return ah?? finaliza la funci??n
      return true;
    }
    return false;
  };

  const AddMarker = () => {
    const map = useMapEvents({
      click: (e) => {
        console.log(e);
        const { lat, lng } = e.latlng;
        setInputs({
          ...inputs,
          lug_coords:[lat, lng]
        });
      },
    });
  };

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const categoriasObtenidas = await obtenerCategorias();
        // console.log({categoriasObtenidas})
        //solamente necesitamos el id y el nombre
        const infoCategorias = categoriasObtenidas.map(
          ({ cat_id, cat_nom }) => {
            return { cat_nom: cat_nom, cat_id: cat_id };
          }
        );
        // console.log({infoCategorias})
        setCategorias(infoCategorias);
      } catch (error) {
        console.log(error);
      }
    };
    getCategorias();
  }, []);

  if(loading){
    //en caso el estado loading sea verdadero en vez de retornar mi componente con sus inputs, retorno el componente Cargando
    return <Cargando />
  }

  return (
    <div>
      <h1 className="mb-3">Crear Lugar</h1>
      <form
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Nombre lugar:</label>
          <input
            type="text"
            placeholder="Ej. Cevicheria La Casita"
            className="form-control"
            name="lug_nom"
            value={inputs.lug_nom}
            onChange={(e) => {
              manejarInputs(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripci??n del lugar</label>
          <input
            type="text"
            placeholder="Ingrese descripci??n"
            className="form-control"
            name="lug_desc"
            value={inputs.lug_desc}
            onChange={(e) => {
              manejarInputs(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Direcci??n del lugar</label>
          <input
            type="text"
            placeholder="Ingrese direcci??n"
            className="form-control"
            name="lug_dir"
            value={inputs.lug_dir}
            onChange={(e) => {
              manejarInputs(e);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Seleccione una categor??a</label>
          <select
            className="form-select"
            name="categoriaId"
            value={inputs.categoriaId}
            onChange={(e) => manejarInputs(e)}
          >
            {categorias.map(({ cat_id, cat_nom }, i) => (
              <option value={cat_id} key={i}>
                {cat_nom}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Seleccione Imagen
          </label>
          <input
            type="file"
            className="form-control"
            ref={inputFile}
            onChange={(e) => {manejarFile(e)}}
          />
        </div>
        {/* estilos directamente, style={{propiedad:"valor"}}  */}
        <MapContainer 
          center={inputs.lug_coords} 
          zoom={15} 
          style={{ height: "400px" }}
        >
          {/* proveedor de datos para el mapa */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <AddMarker />
          <Marker position={inputs.lug_coords}>
            <Popup>
              Informaci??n del lugar {inputs.lug_nom}
            </Popup>
          </Marker>
        </MapContainer>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={existeErrorInputs()}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
