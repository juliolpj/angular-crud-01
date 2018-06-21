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

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.empleadoArray = this.employeeService.getEmployees();
  }

  cathAddEmployee(empleado: Empleado) {
    this.employeeService.addEmployee(empleado);
    this.empleadoSeleccionado = new Empleado();
  }

  cathDeleteEmployee(empleado: Empleado) {
    this.empleadoArray = this.employeeService.deleteEmployee(empleado);
    this.empleadoSeleccionado = new Empleado();
  }
}
