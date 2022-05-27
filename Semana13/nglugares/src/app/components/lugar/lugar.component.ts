import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {
  @Input() lug:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.lug)
  }

}
