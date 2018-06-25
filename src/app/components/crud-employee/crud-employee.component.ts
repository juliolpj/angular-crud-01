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
  public empleadoSeleccionado: Empleado = new Empleado();
  public crudStatus: String;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.empleadoArray = this.employeeService.getEmployees();
    this.crudStatus = '';
  }

  catchSelectEmployee(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
    this.crudStatus = 'consultar';
  }

  cathOkEmployee(empleado: Empleado) {
    console.log('catchOk: ', this.crudStatus);
    switch (this.crudStatus) {
      case 'agregar':
        this.empleadoArray = this.employeeService.addEmployee(empleado);
        break;
    
      case 'modificar':
        this.empleadoArray = this.employeeService.editEmployee(empleado);
        break;

      default:
        break;
    }
    this.empleadoSeleccionado = new Empleado();
  }

  cathCancelEmployee(empleado: Empleado) {
    //this.empleadoArray = this.employeeService.deleteEmployee(empleado);
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
    console.log('catchChangeStatus: ', this.crudStatus);
  }
}
