import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Ilibro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class ServiciolibrosService implements OnInit{

  libros :Ilibro[] = [];

  libro: any;

  constructor(private http: HttpClient) {
    this.getTopHeadlines().subscribe(data => {
      data.forEach(l=> {
        this.libros.push(l);
      });
    });
  }
  ngOnInit(): void {

  }

  getTopHeadlines(){
    return this.http.get<Ilibro[]>("../assets/json/libros.json");
  }

  getLibros(): Ilibro[] {
    return this.libros;
  }

  async getLibro(id: any) {
    await this.getTopHeadlines(); // Espera a que los datos se carguen
    console.log(this.libros);
    console.log(this.libros.find(l => l.id == id));
    return this.libros.find(l => l.id == id);
  }


}
