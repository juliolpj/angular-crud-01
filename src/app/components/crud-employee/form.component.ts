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

  @Output() changeStatus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireDeleteEmployee(empleado: Empleado) {
    this.deleteEmployee.emit(empleado);
  }

  fireOk() {
    console.log('fireok: ', this.crudStatus);
    this.okEmployee.emit({
        id: 0, nombre: this.formNombre, pais: this.formPais
    });
    //this.onCancel();
  }

  onCancel() {
    this.crudStatus = '';
    this.formNombre = '';
    this.formPais = '';
  }

  fireChangeStatus(status) {
    this.crudStatus = status;
    console.log('fireChangeStatus: ', this.crudStatus);
    this.changeStatus.emit(this.crudStatus);
  }

  onEdit() {
    this.crudStatus = 'modificar';
  }
  
  fireCancelSelect() {
    this.cancelSelect.emit();
  }
}
