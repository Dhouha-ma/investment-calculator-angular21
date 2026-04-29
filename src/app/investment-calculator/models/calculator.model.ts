import { FormControl } from '@angular/forms';

export interface CalculatorForm {
  initialInvestment: FormControl<string>;
  annualInvestment: FormControl<string>;
  expectedReturn: FormControl<string>;
  duration: FormControl<string>;
}
