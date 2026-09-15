import { educacion } from "../data/cv";

export default function Educacion() {
  return (
    <section id="educacion" className="seccion" aria-labelledby="educacion-titulo">
      <h2 id="educacion-titulo" className="seccion__titulo">
        Educación
      </h2>
      <ul className="educacion__lista">
        {educacion.map((item) => (
          <li key={item.id} className="educacion__item">
            <span className="educacion__periodo">{item.periodo}</span>
            <div>
              <h3 className="educacion__titulo">{item.titulo}</h3>
              <p className="educacion__institucion">{item.institucion}</p>
              {item.detalle && <p className="educacion__detalle">{item.detalle}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
