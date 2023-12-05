import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princip',
  templateUrl: './princip.page.html',
  styleUrls: ['./princip.page.scss'],
})
export class PrincipPage implements OnInit {
  random:Number;
  input:any;
  mensaje:string;
  constructor() {
    this.random = Math.floor(Math.random()*100);
    this.mensaje = "";
    console.log(this.random);
  }

  SacarMensaje(){
    if(this.input == this.random){
      this.mensaje = "Muy bien crack."
    }else if(this.input < this.random){
      this.mensaje = "Número menor que el random."
    }else if(this.input > this.random){
      this.mensaje = "Número mayor que el random."
    }
  }

  ngOnInit() {
  }

}
