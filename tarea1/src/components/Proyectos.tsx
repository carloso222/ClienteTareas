import { proyectos } from "../data/cv";

export default function Proyectos() {
  return (
    <section id="proyectos" className="seccion" aria-labelledby="proyectos-titulo">
      <h2 id="proyectos-titulo" className="seccion__titulo">
        Proyectos
      </h2>
      <ul className="proyectos__lista" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {proyectos.map((p) => (
          <li key={p.id} className="proyecto">
            <span className="proyecto__anio" aria-hidden="true">
              {p.anio}
            </span>
            <div>
              <h3 className="proyecto__nombre">{p.nombre}</h3>
              <p className="proyecto__descripcion">{p.descripcion}</p>
              <ul className="proyecto__stack" aria-label={`Tecnologías usadas en ${p.nombre}`}>
                {p.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {(p.enlace || p.repo) && (
                <div className="proyecto__enlaces">
                  {p.enlace && (
                    <a href={p.enlace} target="_blank" rel="noreferrer">
                      Ver sitio
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Ver repositorio
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
