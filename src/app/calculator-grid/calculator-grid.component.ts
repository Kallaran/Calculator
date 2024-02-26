import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-grid',
  templateUrl: './calculator-grid.component.html',
  styleUrls: ['./calculator-grid.component.scss'],
})
export class CalculatorGridComponent {
  result = '_';

  firstPart = 0;
  selectedOperator = '';

  displayNumber($event: number) {
    const number = $event.toString();
    if (Number.isNaN(+this.result)) {
      this.result = number;
    } else {
      this.result += number;
    }
  }

  changeOperator($event: string) {
    this.selectedOperator = $event;
    this.firstPart = +this.result;
    this.result = $event;
  }

  calculate() {
    let result = 0;
    switch (this.selectedOperator) {
      case '+': {
        result = this.firstPart + +this.result;
        break;
      }
      case '-': {
        //statements;
        break;
      }
      default: {
        //statements;
        break;
      }
    }
    this.result = result.toString();
  }
}
