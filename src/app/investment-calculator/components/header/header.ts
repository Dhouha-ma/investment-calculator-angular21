import { Component } from '@angular/core';

import { CalculationResult } from '../calculation-result/calculation-result';
import { CalculatorFormComponent } from '../calculator-form/calculator-form';

@Component({
  selector: 'app-header',
  imports: [CalculationResult, CalculatorFormComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
