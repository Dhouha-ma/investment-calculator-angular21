import { Injectable, signal } from '@angular/core';

import { InvestmentResult } from '../models/calculator.model';

@Injectable({ providedIn: 'root' })
export class ResultsService {
  public results = signal<InvestmentResult[]>([]);

  public setResults(next: InvestmentResult[]): void {
    this.results.set(next);
  }

  public clear(): void {
    this.results.set([]);
  }
}
