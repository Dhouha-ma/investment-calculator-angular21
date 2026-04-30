import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-calculation-result',
  imports: [CurrencyPipe],
  templateUrl: './calculation-result.html',
  styleUrl: './calculation-result.scss',
})
export class CalculationResult {
  public resultsService = inject(ResultsService);
}
