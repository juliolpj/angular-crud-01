import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  @Input() empleadoSeleccionado;
  @Input() formId;
  @Input() formNombre;
  @Input() formPais;
  @Input() crudStatus;

  @Output() okEmployee = new EventEmitter<Empleado>();
  @Output() changeStatus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireOk() {
    this.okEmployee.emit({
        id: this.formId, nombre: this.formNombre, pais: this.formPais
    });
    this.onCancel();
  }

  fireChangeStatus(status) {
    this.crudStatus = status;
    this.changeStatus.emit(this.crudStatus);
  }

  onCancel() {
    this.crudStatus = '';
    this.formId = '';
    this.formNombre = '';
    this.formPais = '';

    this.fireChangeStatus('');
  }

}
