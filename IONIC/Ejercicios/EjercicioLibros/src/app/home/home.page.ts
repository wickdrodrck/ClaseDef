import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  libros: Libro[] = [
    {
      "title": "La chica del verano",
      "author": "Javier Castillo",
      "genre": "Novela negra",
      "format": "Tapa blanda",
      "sinopsis": "Durante las vacaciones de verano en un pequeño pueblo costero, una joven desaparece sin dejar rastro. Su familia y amigos comienzan a buscarla, pero pronto se dan cuenta de que algo terrible ha sucedido.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "verano.jpeg",
      "id": 1
    },
    {
      "title": "El problema final",
      "author": "Juan Gómez-Jurado",
      "genre": "Novela negra",
      "format": "Tapa dura",
      "sinopsis": "Un asesino en serie está aterrorizando Madrid. Las víctimas son todas mujeres jóvenes y bellas, y todas tienen una cosa en común: están relacionadas con el mundo del arte.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "problema.jpg",
      "id": 2
    },
    {
      "title": "Un cuento perfecto",
      "author": "Elísabet Benavent",
      "genre": "Romance",
      "format": "Tapa blanda",
      "sinopsis": "Una historia de amor imposible entre dos personas que no deberían conocerse.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "cuento.jpg",
      "id": 3
    },
    {
      "title": "Revolución",
      "author": "Samantha Shannon",
      "genre": "Fantasía",
      "format": "Tapa dura",
      "sinopsis": "En un mundo dividido en dos realidades, una joven debe luchar por su libertad y por la de los suyos.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "revolucion.png",
      "id": 4
    },
    {
      "title": "El monje que vendió su Ferrari",
      "author": "Robin Sharma",
      "genre": "Autoayuda",
      "format": "Tapa blanda",
      "sinopsis": "Una historia inspiradora sobre cómo encontrar el verdadero sentido de la vida.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "monje.png",
      "id": 5
    },
    {
      "title": "El día que se perdió la cordura",
      "author": "Juan Carlos Jurado",
      "genre": "Novela negra",
      "format": "Tapa blanda",
      "sinopsis": "Una serie de asesinatos inexplicables están sembrando el pánico en una pequeña ciudad.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "cordura.png",
      "id": 6
    },
    {
      "title": "La paciente silenciosa",
      "author": "Alex Michaelides",
      "genre": "Thriller",
      "format": "Tapa dura",
      "sinopsis": "Una psicóloga se ve involucrada en un peligroso juego psicológico con una de sus pacientes.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "silencio.png",
      "id": 7
    },
    {
      "title": "Cómo dejar de pensar demasiado",
      "author": "Guillem Viladoms",
      "genre": "Autoayuda",
      "format": "Tapa blanda",
      "sinopsis": "Un manual práctico para aprender a controlar nuestros pensamientos y a vivir una vida más plena.",
      "editorial": "Planeta",
      "year": 2023,
      "portada": "pensar.png",
      "id": 8
    }
  ];
  constructor(private router: Router) {

  }

  redireccion(id:any){
    this.router.navigate(['/libro',id]);
  }

  vuelta(){
    this.router.navigate(['/home']);
  }

  ordenartit(){
    this.libros.sort((a, b) => a.title.localeCompare(b.title));
    this.vuelta();
  }

  ordenarautor(){
    this.libros.sort((a, b) => a.author.localeCompare(b.author));
    this.vuelta();
  }

  ordenargenero(){
    this.libros.sort((a, b) => a.genre.localeCompare(b.genre));
    this.vuelta();
  }



}
