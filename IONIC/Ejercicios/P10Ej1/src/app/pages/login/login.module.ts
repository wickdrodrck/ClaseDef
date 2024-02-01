import { ServicioService } from './../../../../../../../ANGULAR/Ejercicios/Ejercicios/Práctica_5/src_Ejercicio3y4/app/componentes/servicio.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { UsuariosserviService } from 'src/app/servicios/usuariosservi.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponentesModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
