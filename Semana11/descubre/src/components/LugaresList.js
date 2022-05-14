export default function LugaresList({ misCategorias }) {
  const catFiltradas = misCategorias.filter((cat) => cat.lugares.length > 0);
  const arrLugares = catFiltradas.map((item) => item.lugares).flat();

  return (
    <div className="row mt-4">
      {arrLugares.map(({ lug_nom, lug_desc, lug_img }, i) => (
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card mb-4" key={i}>
            <img
              src={lug_img}
              className="card-img-top img-fluid"
              alt={lug_nom}
            />
            <div className="card-body">
              <h5 className="card-title">{lug_nom}</h5>
              <p className="card-text">{lug_desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
