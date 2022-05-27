import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hobbies:Array<string> = [
    "Tocar Guitarra",
    "Probar comida",
    "Cocinar",
    "Jugar juegos de mesa",
    "Videojuegos",
    "Hacer deporte"
  ]

  meQuiere:boolean = true

  url:string = "https://picsum.photos/200/300"

  nuevoHobbie:string = "Hacer Surf"

  constructor() { }

  agregarNuevoHobbie() {
    console.log(this.nuevoHobbie)
  }

  ngOnInit(): void {
  }

}
