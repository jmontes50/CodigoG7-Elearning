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
  lugares:Array<any>
  //inyección por dependencias
  constructor(private _sLugares: LugaresService) { }

  getLugares() {
    // .subscribe(() => {exito}, () => {error})
    this.suscripcionLugares = this._sLugares.obtenerCategorias()
    .subscribe((datos) => {
      //mismo tratamiento que en react para obtener los lugares
      const catFiltradas = datos.filter((cat:any) => cat.lugares.length > 0);
      const arrLugares = catFiltradas.map((item:any) => item.lugares).flat();
      this.lugares = arrLugares
      // console.log(this.lugares)
    })
  }

  ngOnInit(): void {
    //todo lo que sea consumo de servicios va a ir aquí
    //useEffect, solamente ocurre en el montaje
    this.getLugares()
  }

}
