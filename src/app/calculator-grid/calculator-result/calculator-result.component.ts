import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.scss'],
})
export class CalculatorResultComponent {
  @Input() result = '_';
}
