import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD de empleados';
  empleadoArray: Empleado[]
   = [
    {id: 1, nombre: 'Gabriel', pais: 'Venezuela'},
    {id: 2, nombre: 'Gabriela', pais: 'Argentina'},
    {id: 3, nombre: 'Julio', pais: 'Venezuela'},
    {id: 4, nombre: 'Larry', pais: 'Argentina'},
    {id: 5, nombre: 'Lyra', pais: 'Venezuela'},
  ];
  empleadoSeleccionado: Empleado = new Empleado;

  onSelectEmployee(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
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

}
