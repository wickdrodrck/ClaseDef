import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent  implements OnInit {
@Input() titulo: any;
  constructor() { 
    this.titulo="";
  }
  ngOnInit() {}

}
