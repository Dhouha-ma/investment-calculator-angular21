import { Component, signal, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputComponent } from '../../../shared/components/input/input';
import { Button } from '../../../shared/components/button/button';
import { CalculatorForm } from '../../models/calculator.model';
import { calculateInvestmentResults } from '../../utils/investment.util';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-calculator-form',
  imports: [InputComponent, Button, ReactiveFormsModule],
  templateUrl: './calculator-form.html',
  styleUrl: './calculator-form.scss',
})
export class CalculatorFormComponent {
  public calculatorForm = signal<FormGroup<CalculatorForm>>(
    new FormGroup<CalculatorForm>({
      initialInvestment: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.min(0)],
      }),
      annualInvestment: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.min(0)],
      }),
      expectedReturn: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.min(0)],
      }),
      duration: new FormControl<number | null>(null, {
        validators: [Validators.required, Validators.min(0)],
      }),
    }),
  );
  public handleClick(): void {
    if (this.calculatorForm().invalid) {
      this.calculatorForm().markAllAsTouched();
      return;
    }

    const formValue = this.calculatorForm().getRawValue();

    const results = calculateInvestmentResults(
      Number(formValue.initialInvestment),
      Number(formValue.annualInvestment),
      Number(formValue.expectedReturn),
      Number(formValue.duration),
    );

    this.resultsService.setResults(results);
  }

  public resultsService = inject(ResultsService);
}
