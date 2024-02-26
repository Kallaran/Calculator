import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorGridComponent } from './calculator-grid.component';

describe('CalculatorGridComponent', () => {
  let component: CalculatorGridComponent;
  let fixture: ComponentFixture<CalculatorGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorGridComponent]
    });
    fixture = TestBed.createComponent(CalculatorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
