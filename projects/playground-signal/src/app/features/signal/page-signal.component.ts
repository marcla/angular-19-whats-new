import { Component } from '@angular/core';

import { SignalCartComponent } from './ui/cart.component';
import { CounterComponent } from './ui/counter.component';

@Component({
  imports: [
    // SignalCounterComponent,
    CounterComponent,
    SignalCartComponent,
  ],
  template: `
    <h2>Signal</h2>
    <!-- <app-signal-counter /> -->
    <app-counter />

    <h2>Cart</h2>
    <app-signal-cart />
  `,
  styles: ``,
})
export class PageSignalComponent {}
