import { Injectable } from '@angular/core';
//Es la herramienta que me permite hacer peticiones de angular
import { HttpClient } from "@angular/common/http"
//Observable es la manera que se van a manejar el resultado de mis peticiones, types
import { Observable } from 'rxjs';
import iLugar from '../interfaces/iLugar';

@Injectable({
  //que no necesito ponerlo en el app.module.ts
  providedIn: 'root'
})
export class LugaresService {
  url:string = "https://62729d5925fed8fcb5f724b1.mockapi.io"

  //inyección por dependencias, declarar algo como una propiedad más
  // reemplazo const _Http = new HttpClient()
  constructor(private _Http: HttpClient) { }

  obtenerCategorias(): Observable<any> {
    return this._Http.get(`${this.url}/categorias`)
  }

  crearNuevoLugar(nuevoLugar:iLugar):Observable<any> {
    return this._Http.post(`${this.url}/lugares`, nuevoLugar)
  }
}
