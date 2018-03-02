import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public number1: number;
  public number2: number;
  public result: number;

  public add(): void {
    this.result = this.number1 + this.number2;
  }


  constructor() { }

  ngOnInit() {
  }

}
