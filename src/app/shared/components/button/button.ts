import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  public label = input('Click me');
  public clicked = output<void>();

  public onClick() {
    this.clicked.emit();
  }
}
