import { useContext } from "react";
import { FavoritosContext } from "../context/favoritosContext";

export default function FavoritosView() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <>
      <h1 className="mb-3">Mis Favoritos</h1>
      {favoritos.length > 0 ? (
        <div>
          {favoritos.map((item, i) => (
            <div className="card mb-3" key={i}>
              <div className="row" style={{ maxHeight: "200px", overflow:'hidden' }}>
                <div className="col-md-4">
                  <img
                    src={item.lug_img}
                    className="img-fluid rounded-start"
                    alt={item.lug_nom}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.lug_nom}</h5>
                    <p className="card-text">{item.lug_desc}</p>
                    <p className="card-text">
                      <small>
                        <i className="fa-solid fa-location-dot me-2 text-success"></i>
                        {item.lug_dir}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4>Todavia no ha seleccionado lugares como favoritos</h4>
      )}
    </>
  );
}
