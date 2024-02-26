import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-number',
  templateUrl: './calculator-number.component.html',
  styleUrls: ['./calculator-number.component.scss'],
})
export class CalculatorNumberComponent {
  @Input() number = 0;

  @Output() selectedNumber = new EventEmitter<number>();

  click() {
    this.selectedNumber.emit(this.number);
  }
}
