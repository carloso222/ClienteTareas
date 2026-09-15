import { useState, type FormEvent } from "react";
import type { DatosContacto } from "../types";

type Errores = Partial<Record<keyof DatosContacto, string>>;

const DATOS_INICIALES: DatosContacto = {
  nombre: "",
  email: "",
  mensaje: "",
};

function validar(datos: DatosContacto): Errores {
  const errores: Errores = {};

  if (!datos.nombre.trim()) {
    errores.nombre = "Escribe tu nombre.";
  }

  if (!datos.email.trim()) {
    errores.email = "Escribe tu correo.";
  } else if (!/^\S+@\S+\.\S+$/.test(datos.email)) {
    errores.email = "El correo no parece válido.";
  }

  if (!datos.mensaje.trim()) {
    errores.mensaje = "Escribe un mensaje.";
  }

  return errores;
}

export default function Contacto() {
  const [datos, setDatos] = useState<DatosContacto>(DATOS_INICIALES);
  const [errores, setErrores] = useState<Errores>({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(
    campo: keyof DatosContacto
  ): (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    return (e) => {
      setDatos((prev) => ({ ...prev, [campo]: e.target.value }));
    };
  }

  function manejarEnvio(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const erroresEncontrados = validar(datos);
    setErrores(erroresEncontrados);

    if (Object.keys(erroresEncontrados).length > 0) {
      setEnviado(false);
      return;
    }

    // El formulario no envía datos a ningún servidor: solo lo
    // registramos en consola y cambiamos el estado a "enviado".
    console.log("Formulario de contacto enviado:", datos);

    setEnviado(true);
  }

  function manejarNuevoMensaje() {
    setDatos(DATOS_INICIALES);
    setErrores({});
    setEnviado(false);
  }

  return (
    <section id="contacto" className="seccion" aria-labelledby="contacto-titulo">
      <h2 id="contacto-titulo" className="seccion__titulo">
        Contacto
      </h2>

      {enviado ? (
        <div className="contacto__confirmacion" role="status">
          <span aria-hidden="true">✓</span>
          <p>
            <strong>Mensaje registrado.</strong> Gracias, {datos.nombre}. Este
            formulario es una demostración y no envía datos a ningún servidor;
            revisa la consola del navegador para ver la información capturada.{" "}
            <button
              type="button"
              onClick={manejarNuevoMensaje}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                textDecoration: "underline",
                cursor: "pointer",
                padding: 0,
                font: "inherit",
              }}
            >
              Enviar otro mensaje
            </button>
          </p>
        </div>
      ) : (
        <form className="contacto__grid" onSubmit={manejarEnvio} noValidate>
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={datos.nombre}
              onChange={manejarCambio("nombre")}
              aria-invalid={Boolean(errores.nombre)}
              aria-describedby={errores.nombre ? "error-nombre" : undefined}
            />
            {errores.nombre && (
              <span className="campo__error" id="error-nombre">
                {errores.nombre}
              </span>
            )}
          </div>

          <div className="campo">
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              value={datos.email}
              onChange={manejarCambio("email")}
              aria-invalid={Boolean(errores.email)}
              aria-describedby={errores.email ? "error-email" : undefined}
            />
            {errores.email && (
              <span className="campo__error" id="error-email">
                {errores.email}
              </span>
            )}
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={datos.mensaje}
              onChange={manejarCambio("mensaje")}
              aria-invalid={Boolean(errores.mensaje)}
              aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
            />
            {errores.mensaje && (
              <span className="campo__error" id="error-mensaje">
                {errores.mensaje}
              </span>
            )}
          </div>

          <div>
            <button type="submit" className="boton boton--primario">
              Enviar mensaje
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
