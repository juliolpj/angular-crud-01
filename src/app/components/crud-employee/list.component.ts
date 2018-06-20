import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  @Input() empleadoSeleccionado;
  @Input() empleadoArray: Empleado[];
  constructor() { }

  ngOnInit() {
  }

  onSelectEmployee(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
    console.log(this.empleadoSeleccionado.id);
  }
}
