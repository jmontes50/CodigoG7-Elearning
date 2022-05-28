import { Component, OnInit } from '@angular/core';
import iLugar from '../../interfaces/iLugar';
import { LugaresService } from '../../services/lugares.service';

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

  categorias:Array<any> = []

  constructor(private _sLugar: LugaresService) { }

  ngOnInit(): void {
    this.manejarObtenerCategorias()
  }

  manejarObtenerCategorias(){
    this._sLugar.obtenerCategorias()
    .subscribe((cats) => {
      this.categorias = cats
    })
  }

  manejarCrearLugar(){
    this._sLugar.crearNuevoLugar(this.nuevoLugar)
    // .subscribe(() => {exito}, (error)=>{error})
    .subscribe(() => {
      console.log("Lugar Creado!")
    }, (error) => {
      console.log({error})
    })
  }

}
