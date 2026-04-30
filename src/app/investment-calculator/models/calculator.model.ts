import { FormControl } from '@angular/forms';

export interface CalculatorForm {
  initialInvestment: FormControl<number | null>;
  annualInvestment: FormControl<number | null>;
  expectedReturn: FormControl<number | null>;
  duration: FormControl<number | null>;
}

export interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
