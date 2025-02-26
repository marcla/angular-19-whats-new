import { Component } from '@angular/core';

import { CounterComponent, SignalCartComponent, SignalCounterComponent } from './ui/components';

@Component({
  selector: 'app-root',
  imports: [SignalCounterComponent, CounterComponent, SignalCartComponent],
  template: `
    <h1>Hello from {{ title }}!</h1>

    <h2>Signal</h2>
    <app-signal-counter />
    <app-counter />

    <h2>Cart</h2>
    <app-signal-cart />
  `,
})
export class AppComponent {
  title = 'signal';
}
