import { perfil } from "../data/cv";

export default function Acerca() {
  return (
    <section id="acerca" className="seccion" aria-labelledby="acerca-titulo">
      <h2 id="acerca-titulo" className="seccion__titulo">
        Acerca de mí
      </h2>
      <p className="acerca__texto">{perfil.acerca}</p>
    </section>
  );
}
