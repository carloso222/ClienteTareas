# Autoevaluación — CV en línea

## Estructura

El proyecto separa cada sección del CV en su propio componente
(`Hero`, `Acerca`, `Proyectos`, `Tecnologias`, `Educacion`, `Hobbies`,
`Contacto`), coordinados desde `App.tsx`. El contenido vive aparte de
la presentación en `src/data/cv.ts`, tipado con las interfaces de
`src/types`, así que cambiar la información del CV no requiere tocar
los componentes. La navegación (`Navegacion.tsx`) se genera a partir
de una sola lista de secciones (`SECCIONES`), evitando duplicar
nombres de anclas en varios lugares.

Puntos a mejorar: el formulario de contacto podría extraerse a un
hook (`useFormularioContacto`) si creciera en complejidad, y algunos
estilos en línea (como el `<ul>` sin viñetas) podrían moverse a clases
CSS dedicadas.

## Contenido

Cada sección pedida está presente con información real: banner
principal, acerca de, proyectos (CollabBoard y VibeCoders), tecnología
(lenguajes, backend, herramientas e idiomas), educación (ITESO),
intereses y formulario de contacto, con datos de contacto reales
(correo, teléfono, LinkedIn, GitHub).

Punto a mejorar: agregar más proyectos conforme se desarrollen a lo
largo de la carrera, y capturas de pantalla de cada proyecto.

## Diseño

Se optó por un diseño básico e intencional: fondo blanco con
secciones alternas en gris muy claro, un solo color de acento (azul),
una sola familia tipográfica del sistema (sin fuentes externas) y una
barra de navegación superior simple con el nombre a la izquierda y los
enlaces a la derecha. El diseño es responsivo: en pantallas angostas
la barra de enlaces se vuelve desplazable horizontalmente.

Punto a mejorar: revisar el espaciado entre secciones en pantallas muy
anchas y considerar una versión con más jerarquía visual si se desea
un diseño más elaborado en el futuro.

## Accesibilidad y usabilidad

- Se incluyó un enlace "Saltar al contenido principal" para usuarios
  de teclado.
- Cada sección usa `<section>` con `aria-labelledby` apuntando a su
  encabezado.
- El formulario de contacto usa `<label>` asociados a cada campo,
  `aria-invalid` y `aria-describedby` para los mensajes de error, y
  un contenedor de confirmación con `role="status"` para que los
  lectores de pantalla anuncien el resultado del envío.
- Se respeta `prefers-reduced-motion` desactivando animaciones para
  quien lo prefiera.
- Los estados de foco son visibles (`:focus-visible`) en toda la
  aplicación, no solo en los botones.

Punto a mejorar: hacer una auditoría con una herramienta como Lighthouse
o axe DevTools para confirmar niveles de contraste AA en todos los
textos, y agregar pruebas de navegación completa solo con teclado.
