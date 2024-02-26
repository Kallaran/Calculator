import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorOperatorComponent } from './calculator-operator.component';

describe('CalculatorOperatorComponent', () => {
  let component: CalculatorOperatorComponent;
  let fixture: ComponentFixture<CalculatorOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorOperatorComponent]
    });
    fixture = TestBed.createComponent(CalculatorOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
