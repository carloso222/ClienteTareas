import { perfil } from "../data/cv";

export default function Hero() {
  return (
    <section id="inicio" className="seccion hero" aria-labelledby="hero-titulo">
      <h1 id="hero-titulo" className="hero__titulo">
        {perfil.nombre}
      </h1>
      <p className="hero__rol">{perfil.rol}</p>
      <p className="hero__resumen">{perfil.resumen}</p>

      <ul className="hero__contacto">
        <li>
          <a href={`mailto:${perfil.email}`}>{perfil.email}</a>
        </li>
        <li>{perfil.telefono}</li>
        <li>
          <a href={perfil.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={perfil.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>

      <div className="hero__acciones">
        <a className="boton boton--primario" href="#contacto">
          Escríbeme
        </a>
        <a className="boton boton--secundario" href="#proyectos">
          Ver proyectos
        </a>
      </div>
    </section>
  );
}
