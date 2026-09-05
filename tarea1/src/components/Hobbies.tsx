import { hobbies } from "../data/cv";

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="seccion seccion--papel"
      aria-labelledby="hobbies-titulo"
    >
      <div className="seccion-interna">
        <h2 id="hobbies-titulo" className="seccion__titulo">
          Intereses
        </h2>
        <div className="hobbies__grid">
          {hobbies.map((h) => (
            <div key={h.id} className="hobby">
              <div className="hobby__icono" aria-hidden="true">
                {h.icono}
              </div>
              <p className="hobby__nombre">{h.nombre}</p>
              <p className="hobby__descripcion">{h.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
