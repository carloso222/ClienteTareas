# Tarea 3 — CineVault

Aplicación web desarrollada con Angular y TypeScript que permite consultar un catálogo de películas, realizar búsquedas y administrar una colección de favoritos.

## Funcionalidades

- Catálogo de 12 películas con información hardcodeada.
- Filtrado por título, director, productor, género y año.
- Página de detalles para cada película.
- Agregar y eliminar películas favoritas.
- Actualización automática del estado mediante Angular Signals.
- Navegación sin recargar mediante Angular Router.
- Diseño responsive.

## Tecnologías

- Angular 21
- TypeScript
- SCSS
- Angular Router
- Reactive Forms
- Angular Signals
- Vitest

## Instalación y ejecución

**Requisito:** tener Node.js compatible con Angular 21 y npm instalados.

Desde la carpeta `tarea3`:

```bash
npm install
npm start
```

Abrir `http://localhost:4200/`.

## Pruebas

```bash
npm test -- --watch=false
```

La aplicación incluye 18 pruebas automatizadas para el componente principal, la administración de favoritos y los filtros.

## Compilación

```bash
npm run build
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Catálogo de películas |
| `/movies/:id` | Detalle de una película |
| `/favorites` | Películas favoritas |

## Persistencia

Los datos de las películas están definidos directamente en el código. Los favoritos se administran exclusivamente en memoria mediante un servicio de Angular.

No se utiliza backend, base de datos, API de películas, LocalStorage, SessionStorage ni cookies.

Los favoritos se reinician al recargar la aplicación.

Los pósteres utilizan URLs externas de imágenes.