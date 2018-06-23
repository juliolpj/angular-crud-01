import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable()
export class EmployeeService {
  empleados: Empleado[];

  constructor() {
    this.empleados = [];
  }

  getEmployees() {
    this.empleados =  [
      {id: 1, nombre: 'Gabriel', pais: 'Venezuela'},
      {id: 2, nombre: 'Gabriela', pais: 'Argentina'},
      {id: 3, nombre: 'Julio', pais: 'Venezuela'},
      {id: 4, nombre: 'Larry', pais: 'Argentina'},
      {id: 5, nombre: 'Lyra', pais: 'Venezuela'},
    ];
    return this.empleados;
  }

  addEmployee(empleado: Empleado) {
    empleado.id = this.empleados.length + 1;
    this.empleados.push(empleado);
    return this.empleados;
  }

  deleteEmployee(empleado: Empleado) {
    this.empleados = this.empleados.filter( item => item !== empleado);
    return this.empleados;
  }

}
