import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cubic-ft-cal',
  templateUrl: './cubic-ft-cal.component.html',
  styleUrls: ['./cubic-ft-cal.component.css']
})
export class CubicFtCalComponent implements OnInit {
widthValue: number;
lengthValue: number;
heightValue: number;
endCal: number;

  constructor() { }

  ngOnInit(): void {this.widthValue= 0;
    this.lengthValue= 0; this.heightValue=0;
  }
  updateWidth(val){
    this.widthValue = val;
  }

  updateLength(val){
    this.lengthValue = val;
  }

  updateHeight(val){
    this.heightValue = val;
  }

  calculate(){
    var calculation = this.lengthValue * this.widthValue * this.heightValue;
    this.endCal = calculation

  }

}

