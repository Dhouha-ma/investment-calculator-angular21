import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Button } from '../../../shared/components/button/button';
import { InputComponent } from '../../../shared/components/input/input';
import { CalculatorForm } from '../../models/calculator.model';

@Component({
  selector: 'app-header',
  imports: [InputComponent, Button, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  calculatorForm!: FormGroup<CalculatorForm>;

  ngOnInit(): void {
    this.initCalculatorForm();
  }

  public handleInput(value: string): void {
    console.log('value changed:', value);
    console.log(this.calculatorForm.getRawValue());
  }

  public handleClick(): void {
    console.log('button clicked');
    console.log(this.calculatorForm.getRawValue());
  }

  private initCalculatorForm(): void {
    this.calculatorForm = new FormGroup<CalculatorForm>({
      initialInvestment: new FormControl('', { nonNullable: true }),
      annualInvestment: new FormControl('', { nonNullable: true }),
      expectedReturn: new FormControl('', { nonNullable: true }),
      duration: new FormControl('', { nonNullable: true }),
    });
  }
}
