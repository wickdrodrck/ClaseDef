import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {
  t:string;
  constructor() { 
    this.t = "ALERTA"
  }

  ngOnInit() {
  }

}
