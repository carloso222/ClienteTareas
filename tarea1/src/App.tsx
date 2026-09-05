import Navegacion from "./components/Navegacion";
import Hero from "./components/Hero";
import Acerca from "./components/Acerca";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
import Educacion from "./components/Educacion";
import Hobbies from "./components/Hobbies";
import Contacto from "./components/Contacto";
import { perfil } from "./data/cv";

function App() {
  return (
    <>
      <a href="#inicio" className="saltar-enlace">
        Saltar al contenido principal
      </a>
      <Navegacion />
      <main id="contenido-principal">
        <Hero />
        <Acerca />
        <Proyectos />
        <Tecnologias />
        <Educacion />
        <Hobbies />
        <Contacto />
      </main>
      <footer className="pie-pagina">
        © {new Date().getFullYear()} {perfil.nombre}. Hecho con React, Vite y TypeScript.
      </footer>
    </>
  );
}

export default App;
