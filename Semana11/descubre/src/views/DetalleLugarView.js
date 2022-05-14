import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerLugar } from "../services/lugarService";

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
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
