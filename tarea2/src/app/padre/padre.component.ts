import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  elementos: string[] = [
    'El principito',
    'Cien años de soledad',
    '1984',
    'Don Quijote de la Mancha',
    'Crónica de una muerte anunciada',
    'Fahrenheit 451',
    'La metamorfosis',
    'El extranjero'
  ];

  seleccionado = '';

  seleccionarElemento(elemento: string) {
    this.seleccionado = elemento;
  }

  limpiarSeleccion() {
    this.seleccionado = '';
  }
}
