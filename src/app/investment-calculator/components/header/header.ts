import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Button } from '../../../shared/components/button/button';
import { InputComponent } from '../../../shared/components/input/input';
import { CalculatorForm, InvestmentResult } from '../../models/calculator.model';
import { CalculationResult } from '../calculation-result/calculation-result';
import { calculateInvestmentResults } from '../../utils/investment.util';

@Component({
  selector: 'app-header',
  imports: [InputComponent, Button, ReactiveFormsModule, CalculationResult],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public calculatorForm = signal<FormGroup<CalculatorForm>>(
    new FormGroup<CalculatorForm>({
      initialInvestment: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      annualInvestment: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      expectedReturn: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      duration: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    }),
  );
  public results = signal<InvestmentResult[]>([]);

  public handleClick(): void {
    if (this.calculatorForm().invalid) {
      this.calculatorForm().markAllAsTouched();
      return;
    }

    const formValue = this.calculatorForm().getRawValue();

    this.results.set(
      calculateInvestmentResults(
        Number(formValue.initialInvestment),
        Number(formValue.annualInvestment),
        Number(formValue.expectedReturn),
        Number(formValue.duration),
      ),
    );
  }
}
