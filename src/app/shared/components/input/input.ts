import { Component, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputType = 'text' | 'email' | 'password' | 'number';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  public type = input<InputType>('text');
  public placeholder = input<string>('');
  public changed = output<string | number | null>();
  public value = '';
  public disabled = false;

  private onChange = (value: string | number | null) => {};
  private onTouched = () => {};

  public writeValue(value: string | number | null): void {
    this.value = value == null ? '' : String(value);
  }

  public registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public handleInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    this.value = raw;
    const out: string | number | null =
      this.type() === 'number' ? (raw === '' ? null : Number(raw)) : raw;
    this.onChange(out);
    this.changed.emit(out);
  }

  public handleBlur(): void {
    this.onTouched();
  }
}
