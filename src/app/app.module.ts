import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorGridComponent } from './calculator-grid/calculator-grid.component';
import { CalculatorOperatorComponent } from './calculator-grid/calculator-operator/calculator-operator.component';
import { CalculatorNumberComponent } from './calculator-grid/calculator-number/calculator-number.component';
import { CalculatorResultComponent } from './calculator-grid/calculator-result/calculator-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorGridComponent,
    CalculatorOperatorComponent,
    CalculatorNumberComponent,
    CalculatorResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
