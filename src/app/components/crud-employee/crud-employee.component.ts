import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-crud-employee',
  templateUrl: './crud-employee.component.html',
  styles: ['']
})
export class CrudEmployeeComponent implements OnInit {
  public empleadoArray: Empleado[];
  public idSeleccionado: number;
  public empleadoSeleccionado: Empleado = new Empleado();
  public empleadoFormulario: Empleado = new Empleado();
  public crudStatus: String;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.empleadoArray = this.employeeService.getEmployees();
    this.crudStatus = '';
    this.idSeleccionado = 0;
  }

  catchSelectEmployee(empleado: Empleado) {
    this.idSeleccionado = empleado.id;
    this.empleadoSeleccionado = empleado;
    this.empleadoFormulario = {id: empleado.id, nombre: empleado.nombre, pais: empleado.pais};
    this.crudStatus = 'consultar';
  }

  cathOkEmployee(empleado: Empleado) {
    switch (this.crudStatus) {
      case 'agregar':
        this.empleadoArray = this.employeeService.addEmployee(empleado);
        break;

      case 'modificar':
        this.empleadoArray = this.employeeService.editEmployee(empleado);
        break;

       case 'eliminar':
        this.empleadoArray = this.employeeService.deleteEmployee(empleado);
        break;

      default:
        break;
    }
    this.empleadoSeleccionado = new Empleado();
  }

  cathCancelEmployee(empleado: Empleado) {
    // this.empleadoArray = this.employeeService.deleteEmployee(empleado);
    this.empleadoSeleccionado = new Empleado();
  }

  cathCancelSelect() {
    this.crudStatus = '';
    this.empleadoSeleccionado = new Empleado();
  }

  cathChangeStatus(status) {
    this.crudStatus = status;
    if (this.crudStatus === '') {
      this.empleadoSeleccionado = new Empleado();
    }
  }
}
