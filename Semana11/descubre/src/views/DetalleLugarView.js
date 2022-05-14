import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerLugar } from "../services/lugarService";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function DetalleLugarView() {
  const [miLugar, setMiLugar] = useState(null);
  const { catId, lugId } = useParams();

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
          <h2>{miLugar.lug_nom}</h2>
          <div className="row mt-4">
            <div className="col-12 col-lg-8">
              <p>
                <i className="fa-solid fa-location-dot me-2 text-success"></i>
                {miLugar.lug_dir}
              </p>
              <div className="img-fluid">
                <img src={miLugar.lug_img} alt={miLugar.lug_nom} />
              </div>
            </div>
            <p className="lead mt-3">{miLugar.lug_desc}</p>
            <MapContainer 
              style={{ height: "500px" }}
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
