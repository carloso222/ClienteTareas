# Tarea 2 - Input/Output

Aplicación Angular para practicar la comunicación entre componentes hermanos mediante un componente padre usando `@Input()` y `@Output()`.

## Ejecutar

```bash
npm install
ng serve
```

Después abrir `http://localhost:4200/`.

## Componentes

- `PadreComponent`: contiene la lista y el elemento seleccionado.
- `PanelIzquierdoComponent`: muestra la lista y emite el elemento seleccionado.
- `PanelDerechoComponent`: muestra el elemento seleccionado y emite la acción de limpiar.
