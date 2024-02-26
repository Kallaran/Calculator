import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorNumberComponent } from './calculator-number.component';

describe('CalculatorNumberComponent', () => {
  let component: CalculatorNumberComponent;
  let fixture: ComponentFixture<CalculatorNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorNumberComponent]
    });
    fixture = TestBed.createComponent(CalculatorNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
