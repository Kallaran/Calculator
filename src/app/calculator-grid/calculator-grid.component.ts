import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-grid',
  templateUrl: './calculator-grid.component.html',
  styleUrls: ['./calculator-grid.component.scss'],
})
export class CalculatorGridComponent {
  result = '_';

  displayNumber(event: number) {
    if (this.result === '_') {
      this.result = event.toString();
    } else {
      this.result += event.toString();
    }
  }
}
