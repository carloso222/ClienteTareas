import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-panel-derecho',
  templateUrl: './panel-derecho.component.html',
  styleUrl: './panel-derecho.component.css'
})
export class PanelDerechoComponent {
  @Input() seleccionado = '';

  @Output() limpiar = new EventEmitter<void>();

  limpiarSeleccion() {
    this.limpiar.emit();
  }
}
