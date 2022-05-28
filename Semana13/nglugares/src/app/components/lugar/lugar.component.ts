import { Component, OnInit, Input } from '@angular/core';
//si yo deseo recibir esos "props", que en realidad es un property binding, vamos a tener que utilizat Input
@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {
  //Input agrega como propiedad de LugarComponent ese "prop" lug que le hemos dado con el property bindig en lugares.component.html
  @Input() lug:any
  constructor() { }

  ngOnInit(): void {
    // console.log("lugar component", this.lug)
  }

}
