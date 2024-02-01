import { IUsuario } from './../../interfaz/interfaz';
import { UsuariosserviService } from './../../servicios/usuariosservi.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registroForm: FormGroup;
  lista: any;
  mensaje:string = ""

  constructor(public alertController: AlertController, private formBuilder: FormBuilder, private dataservice:UsuariosserviService) {
    this.registroForm = this. formBuilder.group({
      usuario : ['', [Validators.required, Validators.maxLength(16)]],
      password : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
  }

  ngOnInit() {
    this.lista = this.dataservice.getTopHeadlines();
  }

  coinciden(){
    let user = this.dataservice.getUser(this.registroForm.value.usuario, this.registroForm.value.password);
    if(user && user.usuario == "admin"){

    }else if(user){

    }else{
      this.mensaje = "error"
    }
  }

}
