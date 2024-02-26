import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-operator',
  templateUrl: './calculator-operator.component.html',
  styleUrls: ['./calculator-operator.component.scss'],
})
export class CalculatorOperatorComponent {
  @Input() operator = '+';

  @Output() selectedOperator = new EventEmitter<string>();

  click() {
    this.selectedOperator.emit(this.operator);
  }
}
