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
  mensaje:string = "";
  user: any;

  constructor(public alertController: AlertController, private formBuilder: FormBuilder, private dataservice:UsuariosserviService) {
    this.registroForm = this. formBuilder.group({
      usuario : ['', [Validators.required, Validators.maxLength(16)]],
      password : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
    this.lista = this.dataservice.getTopHeadlines().subscribe(l => l.forEach(u=> this.lista.push(u)));
  }

  ngOnInit() {
    this.dataservice.loadUsers();
    const usuarios = this.dataservice.getUsers();
  }

  coinciden(){

    this.user = this.dataservice.getUser(this.registroForm.value.usuario, this.registroForm.value.password);
    console.log(this.lista[0])
    if(this.user && this.user.usuario == "admin"){
      this.mensaje = "guay"
    }else if(this.user){

    }else{
      console.log(this.user.usuario)
      this.mensaje = "error"
    }
  }

}
