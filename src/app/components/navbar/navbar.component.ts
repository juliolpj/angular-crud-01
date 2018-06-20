import { Component, OnInit, Input } from '@angular/core';
import { createInput } from '@angular/compiler/src/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['']
})
export class NavbarComponent implements OnInit {
  @Input() inputTitle: string;
  @Input() inputDescrip: string;
  constructor() { }

  ngOnInit() {
  }

}
