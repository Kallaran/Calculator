import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-operator',
  templateUrl: './calculator-operator.component.html',
  styleUrls: ['./calculator-operator.component.scss'],
})
export class CalculatorOperatorComponent {
  @Input() operator = '+';
}
