import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-ft-cal',
  templateUrl: './square-ft-cal.component.html',
  styleUrls: ['./square-ft-cal.component.css']
})
export class SquareFtCalComponent implements OnInit {
widthValue: number;
lengthValue: number;
endCal: number;
  constructor() { }

  ngOnInit(): void {
    this.widthValue= 0;
    this.lengthValue= 0;
  }
  updateWidth(val){
    this.widthValue = val;
  }

  updateLength(val){
    this.lengthValue = val;
  }

  calculate(){
    var calculation = this.lengthValue * this.widthValue;
    this.endCal = calculation

  }


}
