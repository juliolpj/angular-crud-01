import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  @Input() formEmpleado;
  @Input() crudStatus;

  @Output() okEmployee = new EventEmitter<Empleado>();
  @Output() changeStatus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireOk() {
    this.okEmployee.emit({
        id: this.formEmpleado.id, 
        nombre: this.formEmpleado.nombre, 
        pais: this.formEmpleado.pais
    });
    this.onCancel();
  }

  fireChangeStatus(status) {
    this.crudStatus = status;
    this.changeStatus.emit(this.crudStatus);
  }

  onCancel() {
    this.crudStatus = '';
    this.formEmpleado = {id: 0, nombre:'', pais: ''};
    this.fireChangeStatus('');
  }

}
