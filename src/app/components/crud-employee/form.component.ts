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
  @Output() okEmployee = new EventEmitter<Empleado>();
  @Output() cancelEmployee = new EventEmitter<Empleado>();
  @Output() cancelSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireDeleteEmployee(empleado: Empleado) {
    this.deleteEmployee.emit(empleado);
  }

  fireOk() {
    this.okEmployee.emit({
        id: 0, nombre: this.formNombre, pais: this.formPais
    });
    this.onCancel();
  }

  onCancel() {
    this.crudStatus = '';
    this.formNombre = '';
    this.formPais = '';
  }

  onAdd() {
    this.crudStatus = 'agregar';
  }

  fireCancelSelect() {
    this.cancelSelect.emit();
  }
}
