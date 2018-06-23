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

  cathAddEmployee(empleado: Empleado) {
    this.empleadoArray = this.employeeService.addEmployee(empleado);
    this.empleadoSeleccionado = new Empleado();
  }

  cathDeleteEmployee(empleado: Empleado) {
    this.empleadoArray = this.employeeService.deleteEmployee(empleado);
    this.empleadoSeleccionado = new Empleado();
  }

  cathCancelEmployee(empleado: Empleado) {
    //this.empleadoArray = this.employeeService.deleteEmployee(empleado);
    this.empleadoSeleccionado = new Empleado();
  }

}
