import { FormControl } from '@angular/forms';

export interface CalculatorForm {
  initialInvestment: FormControl<string>;
  annualInvestment: FormControl<string>;
  expectedReturn: FormControl<string>;
  duration: FormControl<string>;
}

export interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
