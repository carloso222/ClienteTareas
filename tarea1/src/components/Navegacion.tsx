import { useEffect, useState } from "react";
import { perfil } from "../data/cv";

export interface SeccionNav {
  id: string;
  etiqueta: string;
}

export const SECCIONES: SeccionNav[] = [
  { id: "inicio", etiqueta: "Inicio" },
  { id: "acerca", etiqueta: "Acerca de" },
  { id: "proyectos", etiqueta: "Proyectos" },
  { id: "tecnologias", etiqueta: "Tecnología" },
  { id: "educacion", etiqueta: "Educación" },
  { id: "hobbies", etiqueta: "Intereses" },
  { id: "contacto", etiqueta: "Contacto" },
];

function useSeccionActiva(ids: string[]) {
  const [activa, setActiva] = useState(ids[0]);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setActiva(entrada.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observador.observe(el);
    });

    return () => observador.disconnect();
  }, [ids]);

  return activa;
}

export default function Navegacion() {
  const activa = useSeccionActiva(SECCIONES.map((s) => s.id));

  return (
    <header className="barra-nav">
      <div className="barra-nav__interior">
        <a href="#inicio" className="barra-nav__nombre">
          {perfil.nombre}
        </a>
        <nav aria-label="Navegación principal">
          <ul className="barra-nav__lista">
            {SECCIONES.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={activa === s.id ? "activo" : ""}
                  aria-current={activa === s.id ? "true" : undefined}
                >
                  {s.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
