import { Component, OnInit } from '@angular/core';
import { UsuariosserviService } from 'src/app/servicios/usuariosservi.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  lista: any;
  constructor(private dataservice:UsuariosserviService) {

  }

  ngOnInit() {
    this.lista = this.dataservice.getTopHeadlines();
  }

  dalecomba(){

  }
}
