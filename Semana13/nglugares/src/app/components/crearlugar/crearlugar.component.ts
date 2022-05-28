import { Component, OnInit } from '@angular/core';
import iLugar from '../../interfaces/iLugar';

@Component({
  selector: 'app-crearlugar',
  templateUrl: './crearlugar.component.html',
  styleUrls: ['./crearlugar.component.css']
})
export class CrearlugarComponent implements OnInit {

  nuevoLugar:iLugar = {
    lug_nom:"",
    lug_desc:"",
    lug_dir:"",
    lug_img:"https://picsum.photos/id/237/200/300",
    lug_coords:[-12.046374, -77.042793],
    categoriaId:1
  }

  constructor() { }

  ngOnInit(): void {
  }

  manejarCrearLugar(){
    console.log("Crear!", this.nuevoLugar)
  }

}
