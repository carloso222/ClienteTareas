# CV en línea — Tarea 1

SPA de currículum en línea construida con React + Vite + TypeScript.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

Para generar el build de producción:

```bash
npm run build
```

## Estructura

```
tarea1/
├── src/
│   ├── components/     # Un componente por sección del CV
│   ├── data/cv.ts       # Contenido del CV (editar aquí con tu información real)
│   ├── types/           # Interfaces TypeScript compartidas
│   ├── App.tsx
│   └── index.css        # Sistema de diseño y estilos globales
├── AUTOEVALUACION.md
└── README.md
```

El contenido en `src/data/cv.ts` ya tiene la información real de Carlos
Emiliano Olmedo Navarro. Actualízalo ahí mismo si algo cambia.

## Flujo de entrega en Git

Este proyecto debe vivir dentro de la carpeta `tarea1/` en una rama
llamada `tarea1` de tu repositorio del semestre. Pasos sugeridos desde
la raíz de tu repositorio:

```bash
# 1. Crear y moverte a la rama tarea1
git checkout -b tarea1

# 2. Copiar el contenido de esta carpeta dentro de una carpeta "tarea1"
#    en la raíz de tu repositorio (si aún no está ahí)

# 3. Agregar y confirmar los cambios
git add tarea1/
git commit -m "Tarea 1: CV en línea con React + Vite + TypeScript"

# 4. Subir la rama
git push -u origin tarea1

# 5. Abrir un Pull Request de "tarea1" hacia tu rama principal (main/master)
#    desde la interfaz de GitHub
```

Recuerda: el nombre de la carpeta y de la rama debe ser exactamente
`tarea1` (todo en minúsculas, sin guiones ni espacios).
