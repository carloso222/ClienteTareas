import { tecnologias } from "../data/cv";

export default function Tecnologias() {
  return (
    <section
      id="tecnologias"
      className="seccion seccion--papel"
      aria-labelledby="tecnologias-titulo"
    >
      <div className="seccion-interna">
        <h2 id="tecnologias-titulo" className="seccion__titulo">
          Tecnologías
        </h2>

        <div className="tecnologias__grid">
          {tecnologias.map((grupo) => (
            <div key={grupo.categoria}>
              <span className="tecnologia__categoria">{grupo.categoria}</span>
              <ul className="tecnologia__items">
                {grupo.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
