import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  @Input() empleadoSeleccionado;
  @Input() formNombre;
  @Input() formPais;
  @Input() crudStatus;

  @Output() deleteEmployee = new EventEmitter<Empleado>();
  @Output() addEmployee = new EventEmitter<Empleado>();
  @Output() cancelEmployee = new EventEmitter<Empleado>();
  @Output() cancelSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireDeleteEmployee(empleado: Empleado) {
    this.deleteEmployee.emit(empleado);
  }

  fireAddEmployee(empleado: Empleado) {
    this.addEmployee.emit(empleado);
  }

  fireCancelEmployee(empleado: Empleado) {
    this.cancelEmployee.emit(empleado);
  }

  fireCancelSelect() {
    this.cancelSelect.emit();
  }
}
