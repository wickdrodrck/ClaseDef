import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaz/interfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosserviService {

  lista: IUsuario[] = [];

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>("/assets/json/usuarios.json");
  }

  loadUsers(): void {
    this.getTopHeadlines().subscribe(data => this.lista = data);
  }

  getUsers(): IUsuario[] {
    return this.lista;
  }

  getUser(usu: string, password: string): IUsuario | undefined {
    return this.lista.find(p => p.usuario === usu && p.password === password);
  }
}
