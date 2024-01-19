import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LibrosComponent } from './libros/libros.component';
import { OrdenarComponent } from './ordenar/ordenar.component';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LibrosComponent, OrdenarComponent],
  imports: [
    CommonModule,
    IonicModule,
    ActivatedRoute,
    Router
  ], exports: [
    HeaderComponent, FooterComponent, LibrosComponent, OrdenarComponent
  ]
})
export class ComponentesModule { }
