import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel-izquierdo',
  templateUrl: './panel-izquierdo.component.html',
  styleUrl: './panel-izquierdo.component.css'
})
export class PanelIzquierdoComponent {
  @Input() elementos: string[] = [];
  @Input() seleccionado = '';

  @Output() elementoSeleccionado = new EventEmitter<string>();

  seleccionar(elemento: string) {
    this.elementoSeleccionado.emit(elemento);
  }
}
