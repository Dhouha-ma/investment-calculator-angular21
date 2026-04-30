import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentResult } from '../../models/calculator.model';

@Component({
  selector: 'app-calculation-result',
  imports: [CurrencyPipe],
  templateUrl: './calculation-result.html',
  styleUrl: './calculation-result.scss',
})
export class CalculationResult {
  public results = input<InvestmentResult[]>([]);
}
