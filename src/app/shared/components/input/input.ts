import { Component, input, output } from '@angular/core';

type InputType = 'text' | 'email' | 'password';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  public type = input<InputType>('text');
  public placeholder = input('');
  public changed = output<void>();

  public onChange() {
    this.changed.emit();
  }
}
