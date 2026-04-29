import { Component, input, output } from '@angular/core';

import { InputType } from '../../../core/models/input.model';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  public type = input<InputType>('text');
  public placeholder = input<string>('');
  public changed = output<void>();

  public onChange() {
    this.changed.emit();
  }
}
