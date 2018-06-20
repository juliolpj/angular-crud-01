import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-crud-employee',
  templateUrl: './crud-employee.component.html',
  styles: ['']
})
export class CrudEmployeeComponent implements OnInit {
  empleadoArray: Empleado[]
   = [
    {id: 1, nombre: 'Gabriel', pais: 'Venezuela'},
    {id: 2, nombre: 'Gabriela', pais: 'Argentina'},
    {id: 3, nombre: 'Julio', pais: 'Venezuela'},
    {id: 4, nombre: 'Larry', pais: 'Argentina'},
    {id: 5, nombre: 'Lyra', pais: 'Venezuela'},
  ];
  empleadoSeleccionado: Empleado = new Empleado();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectEmployee(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
    console.log(this.empleadoSeleccionado.id);
  }

  onSave() {
    if (this.empleadoSeleccionado.id === 0) {
      this.empleadoSeleccionado.id = this.empleadoArray.length + 1;
      this.empleadoArray.push(this.empleadoSeleccionado);
    } else {
      // Actualmente está modificando directamente en el arreglo
    }
    this.empleadoSeleccionado = new Empleado();
  }

  onDelete() {
    if (confirm('Eliminar este empleado?')) {
      this.empleadoArray = this.empleadoArray
      .filter(
        item => item !== this.empleadoSeleccionado
      );
    }
    this.empleadoSeleccionado = new Empleado();
  }
}
