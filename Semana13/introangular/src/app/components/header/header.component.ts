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

  constructor() { }

  ngOnInit(): void {
  }

}
