import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrudEmployeeComponent } from './components/crud-employee/crud-employee.component';
import { ListComponent } from './components/crud-employee/list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrudEmployeeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
