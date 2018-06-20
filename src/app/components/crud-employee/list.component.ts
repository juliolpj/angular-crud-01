import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  @Input() empleadoSeleccionado;
  @Input() empleadoArray: Empleado[];
  @Output() selectEmployee = new EventEmitter<Empleado>();
  constructor() { }

  ngOnInit() {
  }

  fireSelectEmployee(empleado: Empleado) {
    this.selectEmployee.emit(empleado);
  }

  onSelectEmployee(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
    console.log(this.empleadoSeleccionado.id);
  }
}
