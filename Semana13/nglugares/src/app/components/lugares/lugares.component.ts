import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { Subscription } from 'rxjs'; //type, tipo

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
  suscripcionLugares:Subscription
  //inyección por dependencias
  constructor(private _sLugares: LugaresService) { }

  getLugares() {
    // .subscribe(() => {exito}, () => {error})
    this.suscripcionLugares = this._sLugares.obtenerCategorias()
    .subscribe((datos) => {
      console.log(datos)
    })
  }

  ngOnInit(): void {
    //todo lo que sea consumo de servicios va a ir aquí
  }

}
