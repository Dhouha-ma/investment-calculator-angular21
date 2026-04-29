import { Component } from '@angular/core';

import { Input } from '../../../shared/components/input/input';
import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-header',
  imports: [Input, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public handleInput() {
    console.log('value changed');
  }

  public handleClick() {
    console.log('button clicked');
  }
}
