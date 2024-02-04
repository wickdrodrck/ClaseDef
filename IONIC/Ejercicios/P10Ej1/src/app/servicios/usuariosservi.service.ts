import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaz/interfaz';

@Injectable({
  providedIn: 'root'
})
export class UsuariosserviService {

  lista:IUsuario[] = [];
  constructor(private http : HttpClient) {
    this.getTopHeadlines().subscribe(l => l.forEach(u=> this.lista.push(u)));
   }

  getTopHeadlines(){
    return this.http.get<IUsuario[]>("/assets/json/usuarios.json");
  }

  getUsers(){
    return this.lista;
  }

  getUser(usu:string, password:string){
    return this.lista.find(p => p.usuario == usu && p.password == password);
  }
}
