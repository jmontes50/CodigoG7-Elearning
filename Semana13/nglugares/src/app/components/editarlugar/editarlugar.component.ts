import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from "../../services/lugares.service"

@Component({
  selector: 'app-editarlugar',
  templateUrl: './editarlugar.component.html',
  styleUrls: ['./editarlugar.component.css']
})
export class EditarlugarComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private _sLugares: LugaresService) { }
  catId:any = ""
  lugId:any = ""
  lugarAEditar: any

  ngOnInit(): void {
    //useParams
    this.catId = this.actRoute.snapshot.paramMap.get("catId")
    this.lugId = this.actRoute.snapshot.paramMap.get("lugId")
    console.log(this.catId, this.lugId)
    this.manejarObtenerLugPorId(this.catId, this.lugId)
  }

  manejarObtenerLugPorId(catId:any, LugId:any){
    this._sLugares.obtenerLugarPorId(catId, LugId)
    .subscribe((data) => {
      this.lugarAEditar = data
      console.log(this.lugarAEditar)
    })
  }

}
