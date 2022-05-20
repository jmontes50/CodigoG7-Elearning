import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { obtenerLugar } from "../services/lugarService";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
//para utilizar un context vamos a necesitar 2 cosas, useContext de React y el contexto en si
import { FavoritosContext } from "../context/favoritosContext";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DetalleLugarView() {
  const [miLugar, setMiLugar] = useState(null);
  const [fecha, setFecha] = useState(null);

  const { catId, lugId } = useParams();

  const { favoritos, anadirAFavoritos } = useContext(FavoritosContext);

  useEffect(() => {
    const getLugar = async () => {
      try {
        const lugObtenido = await obtenerLugar(catId, lugId);
        setMiLugar(lugObtenido);
      } catch (error) {
        console.log(error);
      }
    };
    getLugar();
  }, []);

  return (
    <>
      {/* puede pasar que al querer renderizar a partir de un objeto, una variable, un estado, un props
      Esa referencia no tenga una propiedad que uds busquen, ahí preguntamos si existe con un operador ternario
      y renderizamos una cosa u otra
    */}
      {miLugar ? (
        <div>
          <div className="d-flex justify-content-between">
            <h2>{miLugar.lug_nom}</h2>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                anadirAFavoritos(miLugar);
              }}
            >
              Agregar a favoritos
            </button>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-lg-8">
              <div className="img-fluid d-flex justify-content-center overflow-hidden">
                <img src={miLugar.lug_img} alt={miLugar.lug_nom} />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <p>
                    <i className="fa-solid fa-location-dot me-2 text-success"></i>
                    {miLugar.lug_dir}
                  </p>
                  <p className="lead mt-3">{miLugar.lug_desc}</p>
                 <div className="d-flex flex-column">
                 <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Fecha de reserva"
                      value={fecha}
                      onChange={(nuevaFecha) => {
                        setFecha(nuevaFecha);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                 </div>
                  <div className="d-grid">
                    <button className="btn btn-success mt-2">Reservar!</button>
                  </div>
                </div>
              </div>
            </div>

            <MapContainer
              style={{ height: "500px", marginTop: "20px" }}
              center={miLugar.lug_coords}
              zoom={18}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={miLugar.lug_coords}>
                <Popup>
                  <i className="fa-solid fa-location-arrow text-success me-2 fa-2x"></i>
                  <h6>{miLugar.lug_nom}</h6>
                  <small>{miLugar.lug_desc}</small>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
