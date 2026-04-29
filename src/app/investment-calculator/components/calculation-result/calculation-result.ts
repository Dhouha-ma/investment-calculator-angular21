import { Component, input } from '@angular/core';

import { InvestmentResult } from '../../models/calculator.model';

@Component({
  selector: 'app-calculation-result',
  imports: [],
  templateUrl: './calculation-result.html',
  styleUrl: './calculation-result.scss',
})
export class CalculationResult {
  public results = input<InvestmentResult[]>([]);
}
